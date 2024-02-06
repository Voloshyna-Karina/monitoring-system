import React, { useState } from "react";
import {useLocation} from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import './style.css';
import { Box } from "@mui/material";

const AuthRootComponent = () => {
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const location = useLocation()

    const handleSubmit = async () => {
        console.log(login)
    }

    return (
        <div className='root'> 
            <form className="form" onSubmit={handleSubmit}>
                <Box className='FormContainer'>
                    {location.pathname === '/login' ? <LoginPage setLogin={setLogin} setPassword={setPassword}/> : location.pathname === '/register' ? <RegisterPage/> : null}
                </Box>
            </form>
        </div>
    )
};

export default AuthRootComponent;