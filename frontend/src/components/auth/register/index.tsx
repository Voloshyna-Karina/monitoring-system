import React, { Fragment, useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [idCode, setIDCode] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      if (!idCode || !login || !password) {
        console.log('Please fill in all fields.');
        return;
      }

      const response = await axios.post('http://localhost:3000/monitoring_system/users/', {
        idPersonalCode: idCode,
        userName: login,
        userPassword: password
      });

      if (response.data.success) {
        navigate('/');
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const handleNavigateClick = () => {
    navigate('/login');
  };

  return (
    <Fragment>
      <Typography variant="h3" fontFamily="Iter" textAlign="center">
        Реєстрація
      </Typography>
      <Typography
        variant="body1"
        marginBottom={2}
        fontFamily="Iter"
        textAlign="center"
      >
        Введіть нижче ваш реєстраційний номер облікової картки платника податків, логін та пароль облікового запису.
      </Typography>
      <TextField
        fullWidth={true}
        margin="normal"
        value={idCode}
        onChange={(e) => setIDCode(e.target.value)}
        label="Цифровий код"
        variant="outlined"
        placeholder="Введіть РНОКПП"
        sx={{ width: "80%" }}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        label="Логін"
        variant="outlined"
        placeholder="Введіть логін"
        sx={{ width: "80%" }}
      />
      <TextField
        fullWidth={true}     
        margin="normal"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        label="Пароль"
        variant="outlined"
        placeholder="Введіть пароль"
        sx={{ width: "80%" }}
      />
      <Button
        sx={{ marginTop: 2, width: "25%", marginBottom: 1 }}
        variant="contained"
        onClick={handleRegister}
      >
        Реєстрація
      </Button>
      <Typography variant="body1" sx={{ fontFamily: "Iter" }}>
        У вас вже є обліковий запис?
        <span className="incitingText" onClick={handleNavigateClick}>Авторизація</span>
      </Typography>
    </Fragment>
  );
};

export default RegisterPage;
