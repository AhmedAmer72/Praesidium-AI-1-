import React from 'react';
import { motion } from 'framer-motion';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { FiExternalLink, FiClock, FiShield, FiAlertTriangle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Card from '../components/ui/Card';
import Gauge from '../components/ui/Gauge';
import SparklineChart from '../components/ui/SparklineChart';
import Button from '../components/ui/Button';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { mockProtocols, mockPolicies, mockClaims } from '../constants';
import { Policy, Claim } from '../types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const PolicyCard: React.FC<{ policy: Policy }> = ({ policy }) => (
  <motion.div variants={itemVariants} className="bg-dark-card/60 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 shadow-2xl shadow-black/20 overflow-hidden relative nft-card">
    <div className="absolute inset-0 bg-gradient-to-br from-glow-purple/20 to-glow-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="flex justify-between items-start">
        <div>
            <h3 className="text-xl font-bold font-orbitron">{policy.protocol.name}</h3>
            <p className="text-sm text-gray-400">Policy #{policy.id.split('-')[1]}</p>
        </div>
        <img src={policy.protocol.logo} alt={policy.protocol.name} className="w-12 h-12" />
    </div>
    <div className="mt-6 space-y-2 text-sm">
        <div className="flex justify-between"><span className="text-gray-400">Coverage</span> <span className="font-semibold">${policy.coverageAmount.toLocaleString()}</span></div>
        <div className="flex justify-between"><span className="text-gray-400">Status</span> <span className={`font-semibold ${policy.status === 'Active' ? 'text-green-400' : 'text-gray-500'}`}>{policy.status}</span></div>
        <div className="flex justify-between"><span className="text-gray-400">Expires</span> <span className="font-semibold">{new Date(policy.endDate).toLocaleDateString()}</span></div>
    </div>
  </motion.div>
);

const ClaimItem: React.FC<{ claim: Claim }> = ({ claim }) => {
    const statusColors = {
        Approved: 'text-green-400 border-green-400',
        Pending: 'text-yellow-400 border-yellow-400',
        Rejected: 'text-red-400 border-red-400',
    }
    return (
        <motion.li variants={itemVariants} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800/50">
            <div className={`p-2 rounded-full text-sm font-bold border ${statusColors[claim.status]}`}>
                {claim.status.slice(0,1)}
            </div>
            <div>
                <p className="font-semibold">{claim.protocolName} Claim</p>
                <p className="text-xs text-gray-400">{new Date(claim.claimDate).toLocaleDateString()} - ${claim.amount.toLocaleString()}</p>
            </div>
        </motion.li>
    );
};

const Dashboard = () => {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return (
        <Card className="max-w-lg mx-auto mt-16 text-center">
            <div className="p-8">
                <FiAlertTriangle className="text-yellow-400 text-6xl mx-auto mb-4" />
                <h2 className="text-2xl font-bold font-orbitron mb-2">Wallet Not Connected</h2>
                <p className="text-gray-400 mb-6">Please connect your wallet to view your dashboard.</p>
                <ConnectButton />
            </div>
        </Card>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 lg:grid-cols-3 gap-8"
    >
      {/* Left Column */}
      <div className="lg:col-span-2 space-y-8">
        <motion.div variants={itemVariants}>
          <Card>
            <div className="grid md:grid-cols-3 items-center">
                <div className="col-span-1 flex justify-center p-4">
                    <Gauge value={82} label="Avg. Praesidium Score" />
                </div>
                <div className="md:col-span-2 grid grid-cols-2 gap-6 p-6 border-t md:border-t-0 md:border-l border-gray-800">
                    <div className="text-center">
                        <p className="text-sm text-gray-400">Total Coverage</p>
                        <p className="text-3xl font-orbitron font-bold text-white">
                            $<AnimatedCounter to={85000} />
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-400">Active Policies</p>
                        <p className="text-3xl font-orbitron font-bold text-white"><AnimatedCounter to={mockPolicies.filter(p => p.status === 'Active').length} /></p>
                    </div>
                     <div className="text-center">
                        <p className="text-sm text-gray-400">Total Premium Paid</p>
                        <p className="text-3xl font-orbitron font-bold text-white">
                            $<AnimatedCounter to={1650} />
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-400">Total Claims Value</p>
                        <p className="text-3xl font-orbitron font-bold text-white">$<AnimatedCounter to={20000} /></p>
                    </div>
                </div>
            </div>
          </Card>
        </motion.div>

        <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-orbitron mb-4">Your Portfolio</h2>
             <motion.div variants={containerVariants} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                 {mockPolicies.map(policy => <PolicyCard key={policy.id} policy={policy} />)}
             </motion.div>
        </motion.section>
      </div>
      
      {/* Right Column */}
      <div className="lg:col-span-1 space-y-8">
        <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-orbitron mb-4">Claims History</h2>
            <Card>
                <ul className="space-y-2">
                    {mockClaims.map(claim => <ClaimItem key={claim.id} claim={claim} />)}
                </ul>
            </Card>
        </motion.section>

        <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-orbitron mb-4">Quick Actions</h2>
             <Card>
                <div className="space-y-4">
                    <p className="text-gray-400">Ready to secure more assets? Find the best coverage for your favorite protocols.</p>
                    <Link to="/marketplace">
                      <Button className="w-full" icon={<FiShield />}>Buy New Insurance</Button>
                    </Link>
                    <Link to="/liquidity">
                      <Button variant="secondary" className="w-full">Manage Liquidity</Button>
                    </Link>
                </div>
             </Card>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Dashboard;