import React, { Fragment } from "react";
import { TextField, Button, Typography } from "@mui/material";

const LoginPage = (props: any) => {
  const {setPassword, setLogin} = props
  
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
        // id="DigitalCodeTextField"
        label="Цифровий код"
        variant="outlined"
        placeholder="Введіть РНОКПП"
        sx={{width: 500}}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        // id="LoginTextField"
        onChange={(e) => setLogin(e.target.value)}
        label="Логін"
        variant="outlined"
        placeholder="Введіть логін"
        sx={{width: 500}}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        // id="PasswordTextField"
        onChange={(e) => setPassword(e.target.value)}
        label="Пароль"
        variant="outlined"
        placeholder="Введіть пароль"
        sx={{width: 500}}
      />
      <Button
        id="AuthorizationButton"
        type="button"
        sx={{ marginTop: 2, width: "25%", marginBottom: 1 }}
        variant="contained"
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
