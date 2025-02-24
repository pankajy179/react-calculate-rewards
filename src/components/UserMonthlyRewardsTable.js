import React from 'react';
import { getMonthYear,calculatePointsForTransaction } from '../utils/helper';

const UserMonthlyRewardsTable = ({ transactions }) => {
  const monthlyRewards = transactions.reduce((acc, transaction) => {
    const monthYear = getMonthYear(transaction.purchaseDate);
    acc[transaction.customerId] = acc[transaction.customerId] || {};
    acc[transaction.customerId][monthYear] =
      (acc[transaction.customerId][monthYear] || 0) +
      calculatePointsForTransaction(transaction.price);
    return acc;
  }, {});

  const getCustomerName = (customerId, transactions) => {
    const customer = transactions.find((item) => item.customerId == customerId);
    return customer ? customer.customerName : null; 
  };

  return (
    <>
    <h2>Monthly Rewards</h2>
    <table>
      <thead>
        <tr>
          <th>Customer ID</th>
          <th>Customer Name</th>
          <th>Month</th>
          <th>Year</th>
          <th>Reward Points</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(monthlyRewards).map(([customerId, monthlyData]) =>
          Object.entries(monthlyData).map(([monthYear, points]) => (
            <tr key={`${customerId}-${monthYear}`}>
              <td>{customerId}</td>
              <td>{getCustomerName(customerId, transactions)}</td>
              <td>{monthYear.split('-')[0]}</td>
              <td>{monthYear.split('-')[1]}</td>
              <td>{points}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
    </>
  );
};

export default UserMonthlyRewardsTable;
