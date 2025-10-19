import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  RainbowKitProvider,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  polygon,
  polygonAmoy,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import '@rainbow-me/rainbowkit/styles.css';

import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import LiquidityPool from './pages/LiquidityPool';
import BuyInsurance from './pages/BuyInsurance';
import NotFound from './pages/NotFound';
import Docs from './pages/Docs';
import SkeletonLoader from './components/ui/SkeletonLoader';

// TODO: Get a projectId from https://cloud.walletconnect.com
const projectId = 'd37e786b8676a000c8900050a9d001d6';

const config = getDefaultConfig({
  appName: 'Praesidium AI',
  projectId,
  chains: [polygon, polygonAmoy],
  ssr: false, // If your dApp is server side rendered (SSR)
});

const queryClient = new QueryClient();

const PageRoutes = () => {
  const location = useLocation();
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  return (
    <AnimatePresence mode="wait" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <LandingPage />
          </motion.div>
        } />
        <Route path="/dashboard" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <Dashboard />
          </motion.div>
        } />
        <Route path="/marketplace" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <Marketplace />
          </motion.div>
        } />
         <Route path="/buy/:protocolId" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <BuyInsurance />
          </motion.div>
        } />
        <Route path="/liquidity" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <LiquidityPool />
          </motion.div>
        } />
        <Route path="/docs" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <Docs />
          </motion.div>
        } />
        <Route path="*" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
             <NotFound />
            </motion.div>
        }/>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate app loading
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="w-screen h-screen flex items-center justify-center bg-dark-bg flex-col space-y-4">
                <div className="w-24 h-24 border-t-4 border-glow-purple border-solid rounded-full animate-spin"></div>
                <p className="text-xl font-orbitron tracking-widest text-gray-300">PRAESIDIUM AI</p>
                <div className="w-1/3">
                    <SkeletonLoader className="h-4 mt-4" />
                </div>
            </div>
        );
    }
  
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <HashRouter>
            <Layout>
              <PageRoutes />
            </Layout>
          </HashRouter>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;