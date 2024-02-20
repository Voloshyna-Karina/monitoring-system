import React, { Fragment, useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

const RegisterPage = () => {
  const [idCode, setIDCode] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Створення об'єкту з даними для відправлення на сервер
    const data = {
      idPersonalCode: idCode,
      userName: login,
      userPassword: password
    };
  
    console.log('Data to be sent:', data);
  
    fetch('/src/api/components/register.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
        Введіть нижче ваш реєстраційний номер облікової картки платника
        податків, логін та пароль облікового запису.
      </Typography>
      <TextField
        fullWidth={true}
        margin="normal"
        onChange={(e) => setIDCode(e.target.value)}
        label="Цифровий код"
        variant="outlined"
        placeholder="Введіть РНОКПП"
        sx={{ width: "80%" }}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        onChange={(e) => setLogin(e.target.value)}
        label="Логін"
        variant="outlined"
        placeholder="Введіть логін"
        sx={{ width: "80%" }}
      />
      <TextField
        fullWidth={true}     
        margin="normal"
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
        Вхід
      </Button>
      <Typography variant="body1" sx={{ fontFamily: "Iter" }}>
        У вас вже є обліковий запис?
        <span className="incitingText">Авторизація</span>
      </Typography>
    </Fragment>
  );
};

export default RegisterPage;
