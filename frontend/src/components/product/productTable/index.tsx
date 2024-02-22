import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface ProductTableProps {
  rows: any[];
  columns: GridColDef[];
}

const ProductTable: React.FC<ProductTableProps> = ({ rows, columns }) => {
  return (
    <div style={{ height: 490, width: '110%' }}>
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

export default ProductTable;