import React, {Fragment} from "react";
import {TextField, Button, Typography} from "@mui/material";

const RegisterPage = () => {
    return (
        <Fragment>
            <Typography variant="h3" fontFamily='Iter' textAlign='center'>Реєстрація</Typography>
            <Typography variant="body1" marginBottom={2} fontFamily='Iter' textAlign='center'>Введіть нижче ваш реєстраційний номер облікової картки платника податків, логін та пароль облікового запису.</Typography>
            <TextField fullWidth={true} margin='normal' id="DigitalCodeTextField" label="Цифровий код" variant="outlined" placeholder="Введіть РНОКПП" />
            <TextField fullWidth={true} margin='normal' id="LoginTextField" label="Логін" variant="outlined" placeholder="Введіть логін"/>
            <TextField fullWidth={true} margin='normal' id="PasswordTextField" label="Пароль" variant="outlined" placeholder="Введіть пароль"/>
            <Button id="AuthorizationButton" sx={{marginTop: 2, width: '25%', marginBottom: 1}} variant="contained">Вхід</Button>
            <Typography variant="body1" sx={{fontFamily: 'Iter'}}>У вас вже є обліковий запис?<span className="incitingText">Авторизація</span></Typography>
        </Fragment>
    );
};

export default RegisterPage;