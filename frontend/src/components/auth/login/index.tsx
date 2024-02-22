import React, { Fragment, useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const LoginPage = (props: any) => {
  const { setPassword, setLogin } = props;
  const navigate = useNavigate(); 
  
  const handleLogin = async () => {
    navigate('/');
    // try {
    //   const response = await axios.post("http://localhost/phpmyadmin/index.php?route=/sql&db=monitoring_system&table=users", {
    //     login: props.login,
    //     password: props.password
    //   });
  
    //   if (response.data.success) {
    //     navigate('/');
    //   } else {
    //     navigate('/register');
    //   }
    // } catch (error) {
    //   console.error("Помилка при надсиланні запиту:", error);
    // }
  };
  
  const handleNavigateClick = () => {
    navigate('/register');
  };
  
  return (
    <Fragment>
      <Typography variant="h3" fontFamily="Iter" textAlign="center">Авторизація</Typography>
      <Typography
        variant="body1"
        marginBottom={2}
        fontFamily="Iter"
        textAlign="center"
      >Введіть нижче ваш реєстраційний номер облікової картки платника податків, логін та пароль облікового запису.</Typography>
      <TextField 
        fullWidth={true}
        margin="normal"
        // id="login"
        onChange={(e) => setLogin(e.target.value)}
        label="Логін"
        variant="outlined"
        placeholder="Введіть логін"
        sx={{width: '80%'}}
      />
      <TextField 
        fullWidth={true}
        margin="normal"
        // id="password"
        onChange={(e) => setPassword(e.target.value)}
        label="Пароль"
        variant="outlined"
        placeholder="Введіть пароль"
        sx={{width: '80%'}}
      />
      <Button 
        id="authorizationUser"
        type="button"
        sx={{ marginTop: 2, width: "25%", marginBottom: 1 }}
        variant="contained"
        onClick={handleLogin}
      >
        Вхід
      </Button>
      <Typography variant="body1" sx={{ fontFamily: "Iter" }}>
        У вас немає облікового запису?
        <span className="incitingText" onClick={handleNavigateClick}>Реєстрація</span>
      </Typography>
    </Fragment>
  );
};

export default LoginPage;