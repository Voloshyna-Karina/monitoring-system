import React, { useState } from "react";
import {useLocation} from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import './style.css';
import { Box } from "@mui/material";

const AuthRootComponent : React.FC = () => {
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const location = useLocation()

    return (
        <div className='root'> 
            <div className="form">
                <Box className='FormContainer'>
                    {location.pathname === '/login' ? <LoginPage/> : location.pathname === '/register' ? <RegisterPage/> : null}
                </Box>
            </div>
        </div>
    )
};

export default AuthRootComponent;