import React from 'react';
import { calculatePointsForTransaction } from '../utils/helper';

const TransactionRow = ({ transaction }) => {
  const { transactionId, customerName, purchaseDate, productPurchased, price } = transaction;
  const points = calculatePointsForTransaction(price);

  return (
    <tr>
      <td>{transactionId}</td>
      <td>{customerName}</td>
      <td>{purchaseDate}</td>
      <td>{productPurchased}</td>
      {/* <td>${Math.floor(price).toFixed(2)}</td> */}
      <td>{price.toFixed(2)}</td>
      <td>{points}</td>
    </tr>
  );
};

export default TransactionRow;