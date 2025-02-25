import React from 'react';
import TransactionRow from './TransactionRow';
import '../styles/TransactionTable.css';

const TransactionTable = ({ transactions }) => {

  return (
    <>
      <h2>Transactions</h2>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Customer Name</th>
            <th>Purchase Date</th>
            <th>Product</th>
            <th>Price</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions?.map((transaction) => (
              <TransactionRow
                key={transaction.transactionId}
                transaction={transaction}
              />
            ))
          }
        </tbody>
      </table>
    </>
  );
};

export default TransactionTable;
