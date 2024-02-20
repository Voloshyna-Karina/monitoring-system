import React from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import './styles.css';

const PersonalOfficeComponent: React.FC = () => {

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
    <Box className="PersonalOfficeComponentBlock">
      <Box className='ComponentTextBlock'>
        <Typography className='SupportingText'>Цифровий код (РНОКПП):</Typography>
        <Typography className='MainText'>ggg</Typography>
      </Box>
      <Box className='ComponentTextBlock'>
        <Typography className='SupportingText'>Логін:</Typography>
        <Typography className='MainText'>ggg</Typography>
      </Box>
      <Box className='ComponentTextBlock'>
        <Typography className='SupportingText'>Пароль:</Typography>
        <Typography className='MainText'>ggg</Typography>
      </Box>
      <Button variant="outlined" onClick={() => {handleAddNewProductComponent();}}>Редагувати</Button>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={isModalOpenStyle}>
          <Typography variant="h4" fontFamily='Iter' textAlign='center' marginBottom={2}>Редагувати особисті дані</Typography>
          <TextField fullWidth={true} margin='normal' id="#" label="Цифровий код" type='number' variant="outlined" placeholder="Введіть РНОКПП" />
          <TextField fullWidth={true} margin='normal' id="#" label="Логін" type='string' variant="outlined" placeholder="Введіть логін" />
          <TextField fullWidth={true} margin='normal' id="#" label="Пароль" type='number' variant="outlined" placeholder="Введіть пароль" />
          <Button id="ADDDDD" sx={{ marginTop: 2, width: '30%', marginBottom: 1 }} variant="contained"
            onClick={() => {
              // Добавлен обработчик события для кнопки "Додати" во всплывающем окне
              handleCloseModal();
              // Здесь можно добавить дополнительную логику для обработки добавления
            }}
          >
            Зберегти
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default PersonalOfficeComponent;
