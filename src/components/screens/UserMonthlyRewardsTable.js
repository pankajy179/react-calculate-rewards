import React, { useState } from 'react';
import { getMonthYear, calculatePointsForTransaction } from '../../utils/helper';
import TableComponent from '../commonComponents.js/TableComponent';
import { TableCell, TableRow } from '@mui/material';

const UserMonthlyRewardsTable = ({ transactions }) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const monthlyRewards =transactions.reduce((acc, transaction) => {
    const monthYear = getMonthYear(transaction.purchaseDate);
    acc[transaction.customerId] = acc[transaction.customerId] || {};
    acc[transaction.customerId][monthYear] =
      (acc[transaction.customerId][monthYear] || 0) +
      calculatePointsForTransaction(transaction.price);
    return acc;
  }, {})

  const getCustomerName = (customerId, transactions) => {
    const customer = transactions.find((item) => item.customerId == customerId);
    return customer ? customer.customerName : null;
  };

  const monthlyRewardsHeaders = [
    { id: "1", label: "Customer Id" },
    { id: "2", label: "Customer Name" },
    { id: "3", label: "Month" },
    { id: "4", label: "Year" },
    { id: "5", label: "Rewards Points" }
  ]

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const tableComponentProps = {
    header: monthlyRewardsHeaders,
    rowsPerPage: rowsPerPage,
    page: page,
    rows: Object.keys(monthlyRewards).length,
    handleChangePage,
    handleChangeRowsPerPage
  }

  return (
    <>
      <h2>Monthly Rewards</h2>

      <TableComponent {...tableComponentProps}>
        {
          Object.entries(monthlyRewards).flatMap(
            ([customerId, monthlyData]) =>
              Object.entries(monthlyData)
                .slice(-5)
                .map(([monthYear, points]) => ({
                  customerId,
                  monthYear,
                  points,
                }))
          ).slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          ).map(({ monthYear, points, customerId }) => (
            <TableRow key={`${customerId}-${monthYear}`}>
              <TableCell>{customerId}</TableCell>
              <TableCell>{getCustomerName(customerId, transactions)}</TableCell>
              <TableCell>{monthYear.split('-')[0]}</TableCell>
              <TableCell>{monthYear.split('-')[1]}</TableCell>
              <TableCell>{points}</TableCell>
            </TableRow>
          ))

          //   Object.entries(monthlyRewards)
          //     .map(([customerId, monthlyData]) =>
          // Object.entries(monthlyData)
          // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

          // )
        }
      </TableComponent>
    </>
  );
};

export default UserMonthlyRewardsTable;
