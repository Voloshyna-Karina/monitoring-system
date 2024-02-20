import { Box, Typography } from "@mui/material"; 
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import "./styles.css";
import React from 'react';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nameProduct', headerName: 'Name product', width: 150 },
    { field: 'priceProduct', headerName: 'Price product', type: 'number', width: 100 },
    { field: 'numbersProduct', headerName: 'Numbers', type: 'number', width: 100 },
    { field: 'sumProduct', headerName: 'Sum product', type: 'number', width: 100 },
  ];
  
  const rows = [
    { id: 1, nameProduct: 'Snow', priceProduct: 56, numbersProduct: 35, sumProduct: 25 },
    { id: 2, nameProduct: 'Lannister', priceProduct: 66, numbersProduct: 42, sumProduct: 25  },
    { id: 3, nameProduct: 'Lannister', priceProduct: 22, numbersProduct: 45, sumProduct: 25  },
    { id: 4, nameProduct: 'Stark', priceProduct: 85, numbersProduct: 16, sumProduct: 25  },
    { id: 5, nameProduct: 'Targaryen', priceProduct: 65, numbersProduct: null, sumProduct: 25  },
    { id: 6, nameProduct: 'Melisandre', priceProduct: null, numbersProduct: 150, sumProduct: 25  },
    { id: 7, nameProduct: 'Clifford', priceProduct: null, numbersProduct: 44, sumProduct: 25  },
    { id: 8, nameProduct: 'Frances', priceProduct: 63, numbersProduct: 36, sumProduct: 25  },
    { id: 9, nameProduct: 'Roxie', priceProduct: 97, numbersProduct: 65, sumProduct: 25  },
  ];

const TransactionComponent = () => {
    return (
        <Box className="TransactionComponentBlock">
        <Typography className="HeaderText" variant="h6" component="h2">Транзакції</Typography>
        <div style={{ height: 490, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </Box>
    );
};

export default TransactionComponent;