import React,{useState} from 'react';
import TableComponent from '../commonComponents.js/TableComponent';
import { TableCell, TableRow } from '@mui/material';
import { calculatePointsForTransaction } from '../../utils/helper';

const TransactionTable = ({ transactions }) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const transactionHeaders = [
    { id: "1", label: "Transaction Id" },
    { id: "2", label: "Customer Name" },
    { id: "3", label: "Purchase Date" },
    { id: "4", label: "Product" },
    { id: "5", label: "Price" },
    { id: "6", label: "Rewards Points" }
  ]
  const points = (price) => calculatePointsForTransaction(price);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const tableComponentProps = {
    header: transactionHeaders,
    rowsPerPage: rowsPerPage,
    page: page,
    rows: transactions.length,
    handleChangePage,
    handleChangeRowsPerPage
  }

  return (
    <>
      <h2>Transactions</h2>

      <TableComponent {...tableComponentProps}>
        {
          transactions
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((transaction) => (
            <TableRow>
              <TableCell>{transaction.transactionId}</TableCell>
              <TableCell>{transaction.customerName}</TableCell>
              <TableCell>{transaction.purchaseDate}</TableCell>
              <TableCell>{transaction.product}</TableCell>
              <TableCell>${transaction.price.toFixed(2)}</TableCell>
              <TableCell>{points(transaction.price)}</TableCell>
            </TableRow>
          ))
        }
      </TableComponent>
    </>
  );
};

export default TransactionTable;
