import React from "react";
import {useLocation} from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import './style.css';
import { Box } from "@mui/material";

const AuthRootComponent = () => {
    const location = useLocation()

    return (
        <div className='root'> 
            <div className="form">
                <Box
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    maxWidth: "640px",
                    margin: "auto",
                    padding: "25px",
                    borderRadius: "20px",
                    boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.10)",
                  }}
                >
                    {location.pathname === '/login' ? <LoginPage/> : location.pathname === '/register' ? <RegisterPage/> : null}
                </Box>
            </div>
        </div>
    )
};

export default AuthRootComponent;