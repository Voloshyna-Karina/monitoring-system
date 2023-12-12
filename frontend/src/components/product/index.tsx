import React from 'react';
import "./styles.css";
import { Box, Typography, Menu, MenuItem, Fade, Button, TextField, Modal} from "@mui/material"; 
  import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

  const columns: GridColDef[] = [
    { field: 'idProduct', headerName: 'ID', width: 70 },
    { field: 'nameProduct', headerName: 'Name product', width: 130 },
    { field: 'priceProduct', headerName: 'Price product', type: 'number', width: 130 },
    { field: 'numbersProduct', headerName: 'Numbers', type: 'number', width: 90 },
    {
      field: 'nameProduct',
      headerName: 'Name product',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
  const ProductComponent = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);
  
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleCloseMenu = () => {
      setAnchorEl(null);
    };
  
    const [isModalOpen, setIsModalOpen] = React.useState(false);
  
    const handleAddNewProductComponent = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    const isModalOpenStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      backgroundColor: '#ffff',
      borderRadius: 3,
      boxShadow: 30,
      p: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    };
  
    return (
      <Box className="ProductComponentBlock">
        <Box className='ProductBlockText'>
          <Typography className="HeaderText" variant="h6" component="h2">Товари</Typography>
          <div className='MenuManageTableButton'>
            <Button id="fade-button" 
              aria-controls={openMenu ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? 'true' : undefined}
              onClick={handleClick}
            >
              Меню
            </Button>
            <Menu id="fade-menu" MenuListProps={{'aria-labelledby': 'fade-button',}} anchorEl={anchorEl} 
              open={openMenu}
              onClose={handleCloseMenu}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={() => {handleCloseMenu(); handleAddNewProductComponent();}}>Додати</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Видалити</MenuItem>
            </Menu>
          </div>
        </Box>
  
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
  
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <Box sx={isModalOpenStyle}>
            <Typography variant="h4" fontFamily='Iter' textAlign='center' marginBottom={2}>Додати новий товар</Typography>
            <TextField fullWidth={true} margin='normal' id="#" label="ID" type='number' variant="outlined" placeholder="Введіть номер товара" />
            <TextField fullWidth={true} margin='normal' id="#" label="Назва товара" variant="outlined" placeholder="Введіть назву товара" />
            <TextField fullWidth={true} margin='normal' id="#" label="Ціна товара" type='number' variant="outlined" placeholder="Введіть ціну товара" />
            <TextField fullWidth={true} margin='normal' id="#" label="Кількість" type='number' variant="outlined" placeholder="Введіть кількість товарів" />
            <Button id="ADDDDD" sx={{ marginTop: 2, width: '30%', marginBottom: 1 }} variant="contained"
              onClick={() => {
                // Добавлен обработчик события для кнопки "Додати" во всплывающем окне
                handleCloseModal();
                // Здесь можно добавить дополнительную логику для обработки добавления
              }}
            >
              Додати
            </Button>
          </Box>
        </Modal>
      </Box>
    );
  };
  
  export default ProductComponent;