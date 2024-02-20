import React, { useState, ChangeEvent } from 'react';
import './styles.css';
import cashier from '../../assets/images/cash-register/cashier.png';
import { Box, Typography, Modal, TextField, Button } from "@mui/material";
import { ListItem, List } from "@mui/material";
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

interface CashRegister {
  Number: string;
  Address: string;
}

const CashRegisterComponent = () => {
  const [isFormOpenNewCashRegister, setIsFormOpenNewCashRegister] = useState(false);
  const [cashRegisters, setCashRegisters] = useState<CashRegister[]>([]); // Массив объектов для представления каждой кассы
  const [newCashRegister, setNewCashRegister] = useState<CashRegister>({ Number: '', Address: '' }); // Данные для новой кассы

  const handleAddNewCashRegister = () => {
    setIsFormOpenNewCashRegister(true);
  };

  const handleCloseModal = () => {
    setIsFormOpenNewCashRegister(false);
  };

  const handleAddCashRegister = () => {
    // Добавляем новую кассу в массив касс с использованием данных из состояния newCashRegister
    setCashRegisters([...cashRegisters, newCashRegister]);
    setNewCashRegister({ Number: '', Address: '' }); // Сбрасываем данные для новой кассы
    handleCloseModal();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Обновляем данные для новой кассы при вводе
    setNewCashRegister({
      ...newCashRegister,
      [event.target.id]: event.target.value,
    });
  };

  const isFormOpenNewCashRegisterStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
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
          {cashRegisters.map((cashRegister, index) => (
            <ListItem key={index} className="CashRegisterListItem">
              <img className="imgCashRegister" src={cashier} alt="cash register" />
              <Typography>{`${cashRegister.Number} | ${cashRegister.Address}`}</Typography>
            </ListItem>
          ))}
        </List>
        <Fab id="AddNewCashRegisterButton" size="small" color="primary" aria-label="add" onClick={handleAddNewCashRegister}>
          <AddIcon />
        </Fab>
      </Box>
      <Modal open={isFormOpenNewCashRegister} onClose={handleCloseModal}>
        <Box className="isFormOpenNewCashRegisterStyle" sx={isFormOpenNewCashRegisterStyle}>
          <Typography variant="h4" fontFamily='Iter' textAlign='center' marginBottom={2}>Додати нову касу</Typography>
          <TextField fullWidth={true} margin='normal' id="Number" type='number' label="Номер каси" variant="outlined" placeholder="Введіть номер каси" onChange={handleInputChange} />
          <TextField fullWidth={true} margin='normal' id="Address" type='string' label="Адреса" variant="outlined" placeholder="Введіть адресу" onChange={handleInputChange} />
          <Button id="ADDDDD" sx={{ marginTop: 2, width: '30%', marginBottom: 1 }} variant="contained" onClick={handleAddCashRegister}>Додати</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default CashRegisterComponent;