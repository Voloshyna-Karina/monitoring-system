import React from 'react';
import { Box, Typography } from "@mui/material"; 
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import "./styles.css";
import TransactionTable from "./transactionTable";

const columns: GridColDef[] = [
    { field: 'id', headerName: '№ Transaction', width: 100 },
    { field: 'idProduct', headerName: '№ Product', width: 100},
    { field: 'idCashRegister', headerName: '№ CashRegister', width: 100},
    { field: 'nameProduct', headerName: 'name product', type: 'string', width: 120},
    { field: 'priceProduct', headerName: 'price product', width: 100},
    { field: 'numberProduct', headerName: 'number product', width: 100},
    { field: 'addressCashRegister', headerName: 'address cash register', width: 200},
    { field: 'sumTransaction', headerName: 'sum transaction', width: 100 },
    // { field: 'DateAndTime', headerName: 'date and time', type: 'dateTime', width: 100 },
  ];
  
  const rows = [
    {id: 54634, idProduct: 53624, idCashRegister: 74526, nameProduct: 'Telephone', priceProduct: 536, numberProduct: 44, addressCashRegister: 'Ivan Franko Square, 3, Kyiv', sumTransaction: 5423}
    // { id: 54634, sumTransaction: 'Snow', priceProduct: 56, numbersProduct: 35, sumProduct: 25 },
    // { id: 2, sumTransaction: 'Lannister', priceProduct: 66, numbersProduct: 42, sumProduct: 25  },
    // { id: 3, sumTransaction: 'Lannister', priceProduct: 22, numbersProduct: 45, sumProduct: 25  },
    // { id: 4, sumTransaction: 'Stark', priceProduct: 85, numbersProduct: 16, sumProduct: 25  },
    // { id: 5, sumTransaction: 'Targaryen', priceProduct: 65, numbersProduct: null, sumProduct: 25  },
    // { id: 6, sumTransaction: 'Melisandre', priceProduct: null, numbersProduct: 150, sumProduct: 25  },
    // { id: 7, sumTransaction: 'Clifford', priceProduct: null, numbersProduct: 44, sumProduct: 25  },
    // { id: 8, sumTransaction: 'Frances', priceProduct: 63, numbersProduct: 36, sumProduct: 25  },
    // { id: 9, sumTransaction: 'Roxie', priceProduct: 97, numbersProduct: 65, sumProduct: 25  },
  ];

const TransactionComponent = () => {
    return (
        <Box className="TransactionComponentBlock">
        <Typography className="HeaderText" variant="h6" component="h2">Транзакції</Typography>
        <TransactionTable rows={rows} columns={columns} />
      </Box>
    );
};

export default TransactionComponent;