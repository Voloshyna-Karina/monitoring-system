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
    navigate('/');
    // try {
    //   const response = await axios.post("http://localhost/phpmyadmin/index.php?route=/sql&db=monitoring_system&table=users", {
    //     idCode: idCode,
    //     login: login,
    //     password: password
    //   });
  
    //   if (response.data.success) {
    //     console.log("Користувач успішно зареєстрований");
    //     navigate('/');
    //   } else {
    //     console.error("Помилка під час реєстрації:", response.data.error);
    //   }
    // } catch (error) {
    //   console.error("Помилка при надсиланні запиту:", error);
    // }
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
        <span className="incitingText" onClick={handleNavigateClick}>Авторизація</span>
      </Typography>
    </Fragment>
  );
};

export default RegisterPage;
