import React, { Fragment, useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { error } from "console";

const LoginPage = (props: any) => {
  // const {setPassword, setLogin} = props

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (login.length === 0) {
      alert("Enter the data!");
    } else if (password.length === 0) {
      alert("Enter the data!");
    } else {
      
    }
  }
  
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
        onClick={handleSubmit}
      >
        Вхід
      </Button>
      <Typography variant="body1" sx={{ fontFamily: "Iter" }}>
        У вас немає облікового запису?
        <span className="incitingText">Реєстрація</span>
      </Typography>
    </Fragment>
  );
};

export default LoginPage;
