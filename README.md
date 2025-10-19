Praesidium AI
Intelligent, Instant, Automated DeFi Insurance.
🚀 Live Demo
Experience the future of DeFi insurance now: https://praesidium-ai-1.vercel.app/

📖 About The Project
Praesidium AI is a decentralized insurance protocol built to solve the biggest problem in DeFi: systemic risk. We replace the slow, subjective, and unreliable claims processes of current providers with a new paradigm of intelligent automation.

The DeFi ecosystem is plagued by hacks, smart contract exploits, and economic failures that have resulted in the loss of billions of dollars and hinder mainstream adoption. Existing insurance solutions rely on manual, governance-based claims voting, which can take weeks and offers no guarantee of a payout.   

Praesidium AI fundamentally re-architects this model. Our protocol is built on two core technological pillars:

AI-Powered Risk Engine: The heart of Praesidium is an AI engine that continuously analyzes a vast array of on-chain and off-chain data to generate a dynamic, real-time "Praesidium Score" for every covered protocol. This score directly and transparently determines the premium cost.   

Automated Parametric Payouts: We completely eliminate the claims committee. Our policies are smart contracts that operate on simple, verifiable "if/then" logic. A policy pays out automatically and instantly when a specific, objectively verifiable on-chain event—a parametric trigger—occurs.   

This project was developed for the Polygon Buildathon by AKINDO.

Built With
Frontend: React, Ethers.js, Chakra UI

Backend (Smart Contracts): Solidity, Hardhat

Blockchain: Polygon

Oracles: Chainlink (for future data feeds)

✨ Key Features
AI-Driven Risk Assessment: View dynamic "Praesidium Scores" for major DeFi protocols, providing a transparent measure of risk.

Parametric Insurance: Policies are triggered by objective on-chain events, not subjective votes.   

Instant & Automated Payouts: When a trigger event occurs, the smart contract executes the payout immediately and automatically. No claims forms, no waiting periods.

Policy as an NFT: Your insurance coverage is minted as an NFT, giving you a verifiable and transferable asset that proves your ownership.

Built for Polygon: Leverages Polygon's high-speed, low-cost infrastructure, making micro-premiums and instant transactions economically viable.   

🏁 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js (v18 or later)

npm or yarn

A Web3 wallet like MetaMask or Phantom

Installation
**Clone the repository:**sh git clone https://github.com/your-username/praesidium-ai.git cd praesidium-ai


Install Frontend Dependencies:

Bash

cd client # or your frontend directory name
npm install
Install Smart Contract Dependencies:

Bash

cd../contracts # or your contracts directory name
npm install
Set up Environment Variables: Create a .env file in the contracts directory and add the following:

POLYGON_RPC_URL="YOUR_ALCHEMY_OR_INFURA_URL"
PRIVATE_KEY="YOUR_WALLET_PRIVATE_KEY"
POLYGONSCAN_API_KEY="YOUR_POLYGONSCAN_API_KEY"
Running the Project
Deploy Smart Contracts: In the contracts directory, run the deployment script:

Bash

npx hardhat run scripts/deploy.js --network polygon
Note: Update the contract address in your frontend configuration after deployment.

Start the Frontend: In the client directory, run:

Bash

npm start
The application should now be running on http://localhost:3000.

🗺️ Roadmap
Praesidium AI is currently an MVP, but our vision is to build a foundational pillar of the DeFi ecosystem.

[x] Phase 1: MVP Launch (Buildathon)

Core smart contract architecture on Polygon.

Functional UI for purchasing policies.

Demonstration of automated parametric payouts.

[ ] Phase 2: AI Engine Integration

Develop and train the machine learning models for dynamic risk scoring.   

Integrate the live AI engine to update Praesidium Scores in real-time.

Expand coverage to a wider range of Polygon protocols.

[ ] Phase 3: Ecosystem Integration & Composability

Partner with DeFi dashboards and wallets for one-click insurance options.

Introduce tokenized underwriting positions (pUTs) to create a new, yield-bearing asset class.

[ ] Phase 4: The Multi-Chain Future

Leverage Polygon's AggLayer to offer the first truly seamless, aggregated cross-chain insurance products.   

🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request
