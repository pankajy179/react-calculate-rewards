import React, { useState } from 'react';
import { calculatePointsForTransaction } from '../../utils/helper';
import { TableCell, TableRow } from '@mui/material';
import TableComponent from '../commonComponents.js/TableComponent';

const TotalRewardsTable = ({ transactions }) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

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
    return customer ? customer.customerName : null;
  };

  const totalRewardsHeaders = [
    { id: "1", label: "Customer Name" },
    { id: "2", label: "Total Rewards Point" }
  ]


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const tableComponentProps = {
    header: totalRewardsHeaders,
    rowsPerPage: rowsPerPage,
    page: page,
    rows: Object.keys(totalRewards).length,
    handleChangePage,
    handleChangeRowsPerPage
  }

  return (
    <>
      <h2>Total Rewards</h2>

      <TableComponent {...tableComponentProps}>
        {
          Object.entries(totalRewards)
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map(([customerId, totalPoints]) => (
            <TableRow key={customerId}>
              <TableCell>{getCustomerName(customerId, transactions)}</TableCell>
              <TableCell>{totalPoints}</TableCell>
            </TableRow>
          ))
        }
      </TableComponent>
    </>
  );
};

export default TotalRewardsTable;
