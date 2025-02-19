import React from 'react';
import { calculatePointsForTransaction } from '../utils/pointsCalculator';

const TotalRewardsTable = ({ transactions }) => {
  const totalRewards = transactions.reduce((acc, transaction) => {
    acc[transaction.customerId] =
      (acc[transaction.customerId] || 0) +
      calculatePointsForTransaction(transaction.price);
    return acc;
  }, {});
  const getCustomerName = (customerId, transactions) => {
    const customer = transactions.find(
      (item) => item.customerId == customerId
    );
    console.log("asdf", customer)
    return customer ? customer.customerName : null;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Total Reward Points</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(totalRewards).map(([customerId, totalPoints]) => (
          <tr key={customerId}>
            <td>{getCustomerName(customerId, transactions)}</td>
            <td>{totalPoints}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TotalRewardsTable;
