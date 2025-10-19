import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { FiAlertTriangle } from 'react-icons/fi';

import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const poolStatsData = [
  { name: 'USDC', value: 45, color: '#2775CA' },
  { name: 'DAI', value: 30, color: '#F4B731' },
  { name: 'USDT', value: 20, color: '#50AF95' },
  { name: 'MATIC', value: 5, color: '#8247E5' },
];

const LiquidityPool = () => {
  const { isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState<'deposit' | 'withdraw'>('deposit');
  const [amount, setAmount] = useState('');

  if (!isConnected) {
    return (
        <Card className="max-w-lg mx-auto mt-16 text-center">
            <div className="p-8">
                <FiAlertTriangle className="text-yellow-400 text-6xl mx-auto mb-4" />
                <h2 className="text-2xl font-bold font-orbitron mb-2">Wallet Not Connected</h2>
                <p className="text-gray-400 mb-6">Please connect your wallet to manage liquidity.</p>
                <ConnectButton />
            </div>
        </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-3 space-y-8">
        <Card className="relative overflow-hidden flex flex-col items-center justify-center min-h-[300px] text-center p-8">
          <div className="absolute inset-0 bg-dark-bg">
            <div className="absolute inset-0 opacity-20 ripple-bg"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-sm uppercase tracking-widest text-gray-400">Pool APY</h2>
            <p 
                className="text-7xl font-orbitron my-2"
                style={{ textShadow: '0 0 10px #A855F7, 0 0 20px #A855F7, 0 0 30px #A855F7' }}
            >
                <AnimatedCounter to={8.75} precision={2} />%
            </p>
            <p className="text-gray-300">Earn yield by providing liquidity to the insurance pool.</p>
          </div>
        </Card>

        <Card>
            <div className="flex border-b border-gray-700">
                <button 
                    onClick={() => setActiveTab('deposit')}
                    className={`flex-1 py-3 font-semibold text-center transition-colors ${activeTab === 'deposit' ? 'text-glow-blue border-b-2 border-glow-blue' : 'text-gray-500 hover:text-white'}`}>
                    Deposit
                </button>
                 <button 
                    onClick={() => setActiveTab('withdraw')}
                    className={`flex-1 py-3 font-semibold text-center transition-colors ${activeTab === 'withdraw' ? 'text-glow-blue border-b-2 border-glow-blue' : 'text-gray-500 hover:text-white'}`}>
                    Withdraw
                </button>
            </div>
            <div className="p-6">
                <div className="mb-4">
                    <label className="block text-sm mb-2 text-gray-400">Amount</label>
                    <div className="relative">
                        <input 
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0.00"
                            className="w-full bg-dark-bg border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-glow-blue"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">USDC</span>
                    </div>
                </div>
                <Button className="w-full text-lg capitalize">{activeTab}</Button>
            </div>
        </Card>
      </div>
      
      {/* Side Content */}
      <div className="lg:col-span-2 space-y-8">
        <Card>
          <h3 className="text-xl font-orbitron mb-4">Your Position</h3>
          <div className="space-y-3">
             <div className="flex justify-between text-lg">
                <span className="text-gray-400">Deposited</span>
                <span className="font-bold">
                    $<AnimatedCounter to={5234.89} precision={2} />
                </span>
             </div>
             <div className="flex justify-between text-lg">
                <span className="text-gray-400">Earnings</span>
                <span className="font-bold text-green-400">
                    +$<AnimatedCounter to={178.41} precision={2} />
                </span>
             </div>
              <div className="flex justify-between text-lg">
                <span className="text-gray-400">Pool Share</span>
                <span className="font-bold">
                    <AnimatedCounter to={0.02} precision={2} />%
                </span>
             </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-xl font-orbitron mb-4">Pool Statistics</h3>
          <div className="space-y-3 mb-6">
             <div className="flex justify-between">
                <span className="text-gray-400">Total Liquidity</span>
                <span>$<AnimatedCounter to={26174450} /></span>
             </div>
             <div className="flex justify-between">
                <span className="text-gray-400">Utilization</span>
                <span><AnimatedCounter to={63.5} precision={1}/>%</span>
             </div>
          </div>
          <h4 className="font-semibold mb-4">Asset Distribution</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={poolStatsData} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                    <XAxis type="number" hide />
                    <YAxis type="category" dataKey="name" stroke="#9ca3af" axisLine={false} tickLine={false} />
                    <Tooltip cursor={{fill: 'rgba(100,100,100,0.1)'}} contentStyle={{ backgroundColor: '#121326', border: '1px solid #374151' }} />
                    <Bar dataKey="value" barSize={20} radius={[0, 10, 10, 0]}>
                        {poolStatsData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <style jsx global>{`
            .ripple-bg {
                width: 100%;
                height: 100%;
                position: absolute;
                background: radial-gradient(circle, rgba(106, 17, 203, 0.2) 0%, rgba(106, 17, 203, 0) 60%);
                animation: ripple 5s infinite linear;
            }
            @keyframes ripple {
              0% { transform: scale(0); opacity: 1; }
              100% { transform: scale(2); opacity: 0; }
            }
        `}</style>
      </div>
    </div>
  );
};

export default LiquidityPool;