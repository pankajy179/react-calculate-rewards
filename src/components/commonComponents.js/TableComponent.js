import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@mui/material';

const TableComponent = (props) => {
    const { header, children, rowsPerPage, page, rows, handleChangePage, handleChangeRowsPerPage } = props

    return (
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table >
                <TableHead >
                    <TableRow className='tableHeader'>
                        {
                            header.map((item) => (
                                <TableCell key={item.id}>
                                    <span style={{color:"#FFFFFF"}}>{item.label}</span>
                                </TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {children}
                </TableBody>
                <TableFooter>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                        count={rows}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableFooter>
            </Table>
        </TableContainer >
    );
};

export default TableComponent;