import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface TransactionTableProps {
  rows: any[];
  columns: GridColDef[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({ rows, columns }) => {
  return (
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
  );
};

export default TransactionTable;