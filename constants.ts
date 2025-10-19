
import { Protocol, Policy, Claim, RiskLevel } from './types';

function generateTVLHistory() {
  const data = [];
  let value = Math.random() * 50 + 50; // start between 50M and 100M
  for (let i = 30; i > 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    value += (Math.random() - 0.5) * 5;
    if (value < 10) value = 10;
    data.push({ date: date.toISOString().split('T')[0], value: parseFloat(value.toFixed(2)) });
  }
  return data;
}

export const mockProtocols: Protocol[] = [
  {
    id: 'aave',
    name: 'Aave',
    logo: 'https://cryptologos.cc/logos/aave-aave-logo.svg?v=029',
    tvl: 12500000000,
    tvlHistory: generateTVLHistory(),
    riskScore: 88,
    riskLevel: RiskLevel.Low,
    premiumRate: 1.2,
    coverageLimit: 1000000,
    triggerConditions: ['Smart contract exploit', 'Oracle failure'],
    incidentHistory: [{ date: '2023-04-15', description: 'Minor oracle manipulation attempt.' }],
  },
  {
    id: 'compound',
    name: 'Compound',
    logo: 'https://cryptologos.cc/logos/compound-comp-logo.svg?v=029',
    tvl: 8900000000,
    tvlHistory: generateTVLHistory(),
    riskScore: 85,
    riskLevel: RiskLevel.Low,
    premiumRate: 1.5,
    coverageLimit: 800000,
    triggerConditions: ['Governance attack', 'Liquidation engine failure'],
    incidentHistory: [],
  },
  {
    id: 'curve',
    name: 'Curve Finance',
    logo: 'https://cryptologos.cc/logos/curve-dao-token-crv-logo.svg?v=029',
    tvl: 4300000000,
    tvlHistory: generateTVLHistory(),
    riskScore: 72,
    riskLevel: RiskLevel.Medium,
    premiumRate: 2.8,
    coverageLimit: 500000,
    triggerConditions: ['Re-entrancy exploit', 'Stablecoin de-peg event > 5%'],
    incidentHistory: [{ date: '2023-07-30', description: 'Vyper compiler re-entrancy vulnerability.' }],
  },
   {
    id: 'uniswap',
    name: 'Uniswap',
    logo: 'https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=029',
    tvl: 6200000000,
    tvlHistory: generateTVLHistory(),
    riskScore: 92,
    riskLevel: RiskLevel.Low,
    premiumRate: 1.1,
    coverageLimit: 1500000,
    triggerConditions: ['Flash loan attack', 'Protocol upgrade failure'],
    incidentHistory: [],
  },
  {
    id: 'sushiswap',
    name: 'SushiSwap',
    logo: 'https://cryptologos.cc/logos/sushiswap-sushi-logo.svg?v=029',
    tvl: 1100000000,
    tvlHistory: generateTVLHistory(),
    riskScore: 65,
    riskLevel: RiskLevel.Medium,
    premiumRate: 3.5,
    coverageLimit: 300000,
    triggerConditions: ['Rug pull by core team member', 'DNS hijacking'],
    incidentHistory: [{ date: '2023-04-09', description: 'RouteProcessor2 contract approval bug.' }],
  },
  {
    id: 'balancerv2',
    name: 'Balancer V2',
    logo: 'https://cryptologos.cc/logos/balancer-bal-logo.svg?v=029',
    tvl: 1800000000,
    tvlHistory: generateTVLHistory(),
    riskScore: 78,
    riskLevel: RiskLevel.Medium,
    premiumRate: 2.2,
    coverageLimit: 600000,
    triggerConditions: ['Pool manipulation', 'Flash loan vulnerability'],
    incidentHistory: [{ date: '2023-08-22', description: 'Vulnerability affecting boosted pools.' }],
  },
];

export const mockPolicies: Policy[] = [
  {
    id: 'pol-001',
    protocol: mockProtocols[0],
    coverageAmount: 50000,
    premiumPaid: 600,
    startDate: '2024-01-15',
    endDate: '2025-01-15',
    status: 'Active',
  },
  {
    id: 'pol-002',
    protocol: mockProtocols[2],
    coverageAmount: 25000,
    premiumPaid: 700,
    startDate: '2023-06-01',
    endDate: '2024-06-01',
    status: 'Expired',
  },
  {
    id: 'pol-003',
    protocol: mockProtocols[4],
    coverageAmount: 10000,
    premiumPaid: 350,
    startDate: '2024-03-10',
    endDate: '2025-03-10',
    status: 'Active',
  },
];

export const mockClaims: Claim[] = [
  {
    id: 'clm-001',
    policyId: 'pol-002-expired',
    protocolName: 'Curve Finance',
    claimDate: '2023-08-01',
    amount: 15000,
    status: 'Approved',
  },
  {
    id: 'clm-002',
    policyId: 'pol-005-active',
    protocolName: 'SushiSwap',
    claimDate: '2023-04-10',
    amount: 5000,
    status: 'Approved',
  },
  {
    id: 'clm-003',
    policyId: 'pol-001-active',
    protocolName: 'Aave',
    claimDate: '2024-05-20',
    amount: 20000,
    status: 'Pending',
  },
];

export const DOC_CONTENT = `Step 1: Connect Your Wallet
First, connect your wallet to the Praesidium AI platform.
Navigate to the homepage of the website.
Click the "Connect Wallet" button, usually located in the top-right corner.
Select your wallet provider from the list that appears.
Approve the connection request within your wallet extension or mobile app. Ensure you are connected to the Polygon network.

Step 2: Explore the Insurance Marketplace
Once connected, you can browse the available insurance options.
Go to the "Marketplace" or "Dashboard" section.
You will see a list of major DeFi protocols on Polygon that are available for coverage, such as Aave, Quickswap, and Polymarket. 
Next to each protocol, you will see its "Praesidium Score." This is a real-time risk rating from 1 to 100, generated by our AI engine. A higher score indicates lower perceived risk, which results in a lower premium.

Step 3: Configure Your Insurance Policy
Select the protocol you wish to protect and define the terms of your coverage.
Click on the protocol you want to insure (e.g., Aave).
On the policy configuration page, enter two details:
Coverage Amount: The total value (in USD) you wish to protect.
Coverage Period: The length of time you want the policy to be active (e.g., 30, 90, or 180 days).
As you enter these details, the interface will instantly calculate and display the Premium, which is the total cost of your insurance policy.

Step 4: Purchase Your Policy
Once you are satisfied with the terms, you can purchase the policy.
Click the "Purchase Cover" button.
Your wallet will pop up and ask you to approve two separate transactions:
Approve: This first transaction gives the Praesidium smart contract permission to use the required amount of your stablecoins for the premium.
Confirm Purchase: This second transaction finalizes the purchase and mints your policy.
Confirm both transactions in your wallet. Once the second transaction is confirmed on the Polygon blockchain, your assets are officially protected.

Step 5: View Your Policy NFT
Your insurance policy is a digital asset that you own. Upon purchase, it is minted as a Non-Fungible Token (NFT) and sent directly to your wallet. You can view this policy NFT in your wallet's NFT section or on any Polygon-compatible NFT marketplace. This proves your ownership and makes the policy itself a transparent, transferable asset.

Step 6: Understanding Payouts — The Praesidium Difference
This is the most important and innovative feature of Praesidium AI.
There is no manual claims process.
Unlike traditional insurance or first-generation DeFi protocols where you must submit a claim and wait for a subjective vote, Praesidium operates on parametric triggers. 
What is a Parametric Trigger? It is a specific, objectively verifiable on-chain event that is defined in your policy's smart contract. If this event occurs, the policy pays out automatically and instantly. 
An Example: A policy covering your funds in Aave might have a trigger like: IF the protocol's Total Value Locked (TVL) drops by more than 50% within a 1-hour window, THEN the policy is triggered.
Automatic Payout: If this trigger event happens, the Praesidium smart contract will automatically and immediately send the full coverage amount directly to your wallet. You do not need to do anything—no forms, no waiting, no committees.
This automated system removes all ambiguity and human delay, ensuring you receive your funds when you need them most. Congratulations, you are now part of a smarter, safer DeFi ecosystem.`;
