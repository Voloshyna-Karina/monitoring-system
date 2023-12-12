import React, { useState } from 'react';
import './styles.css';
import cashier from '../../assets/images/cash-register/cashier.png';
import { Box, Typography, Modal, TextField, Button } from "@mui/material";
import { ListItem, List } from "@mui/material";
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const CashRegisterComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddNewCashRegister = () => {
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
    <Box className="CashRegisterComponentBlock">
      <Typography className="HeaderText" variant="h6" component="h2">Каси</Typography>
      <Box className="CashRegisterContainer">
        <List className="CashRegisterList">
          <ListItem className="CashRegisterListItem">
            <img src={cashier} alt="cash register" width={150} height={150} />
          </ListItem>
        </List>
        <Fab id="AddNewCashRegisterButton" size="small" color="primary" aria-label="add" onClick={handleAddNewCashRegister}>
          <AddIcon />
        </Fab>
      </Box>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={isModalOpenStyle}>
          {/* Здесь вы можете разместить содержимое вашего всплывающего окна */}
          <Typography variant="h4" fontFamily='Iter' textAlign='center' marginBottom={2}>Додати нову касу</Typography>
          <TextField fullWidth={true} margin='normal' id="#" label="Номер каси" variant="outlined" placeholder="Введіть номер каси" />
          <TextField fullWidth={true} margin='normal' id="#" label="Адреса" variant="outlined" placeholder="Введіть адресу" />
          <Button id="ADDDDD" sx={{marginTop: 2, width: '30%', marginBottom: 1}} variant="contained"
            onClick={() => {
              // Добавлен обработчик события для кнопки "Додати" во всплывающем окне
              handleCloseModal();
              // Здесь можно добавить дополнительную логику для обработки добавления
            }}
          >Додати</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default CashRegisterComponent;