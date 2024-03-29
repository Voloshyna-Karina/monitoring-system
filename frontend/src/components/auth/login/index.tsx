import React, { Fragment, useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const LoginPage = (props: any) => {
  const { setLogin, setPassword } = props;
  const navigate = useNavigate();
  const [login, setLoginLocal] = useState("");
  const [password, setPasswordLocal] = useState("");

  const handleLogin = async () => {
    navigate('/');
    try {
      if (!login || !password) {
        console.log('Please fill in all fields.');
        return;
      }

      const response = await axios.post('http://localhost:3000/api/users/', {
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

    // try {
    //   const response = await axios.post('http://localhost/api.php', { login, password });
      
    //   if (response.data.success) {
    //     // Успешная авторизация
    //     setSuccess(true);
    //     setError(null);
    //     // Возможно, вам также нужно что-то сделать с токеном или другими данными, возвращаемыми сервером
    //   } else {
    //     // Неудачная авторизация
    //     setSuccess(false);
    //     setError("Неверный логин или пароль");
    //   }
    // } catch (error) {
    //   console.error('Ошибка при отправке запроса:', error);
    //   setSuccess(false);
    //   setError("Произошла ошибка при авторизации");
    // }

    // try {
    //   const response = await axios.post('api/components/login.php', { login, password });

    //   if (response.data.success) {
    //     navigate('/');
    //   } else {
    //     console.log(response.data.message);
    //   }
    // } catch (error) {
    //   console.error('Error during login:', error);
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
        onChange={(e) => setLogin(e.target.value)}
        label="Логін"
        variant="outlined"
        placeholder="Введіть логін"
        sx={{width: '80%'}}
      />
      <TextField 
        fullWidth={true}
        margin="normal"
        type="password"
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