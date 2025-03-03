Rewards Tracking System

A react based customers reward application used to calculate and display reward points on mothly basis as well as per customer.

Features:

1. Transaction history with rewards points per transaction.
2. Monthly rewards per customer per month.
3. Total rewards per customer. 

Simulation:
1. Sample data added in data.js file.
2. Api simulation function is in api.js file.

Transaction Rewards Calculation:

1. 0 point for a transaction <= 50
2. 1 point for each dollar spent between $50 and $100.
3. 2 point for each dollar spent above $100.

Installation and running aplication

1. Clone the repository: https://github.com/pankajy179/react-calculate-rewards
2. Install dependencies: npm install
3. Start development server: npm start
4. Access application: http://localhost:3000

Screenshots

![Loader](/public/screenshots/loader.png)
![Customer Rewards](/public/screenshots/transaction.png)
![Monthly Rewards Table](/public/screenshots/monthly_rewards.png)
![Total Rewards Table](/public/screenshots/total_rewards.png)
![Error Page](/public/screenshots/error_boundary.png)