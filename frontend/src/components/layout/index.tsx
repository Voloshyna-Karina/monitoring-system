import React, { useState } from "react";
import { ILayout } from "../../common/types/layout";
import TopBarComponent from "../top-bar";
import { useLocation } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import SideBarComponent from "../side-bar";

const LayoutComponent = ({children}: ILayout) => {
    const [isOpen, setIsOpen] = useState(true)
    const location = useLocation()
    const isNonMobile = useMediaQuery('(min-width:600px)');
    return (
        location.pathname === '/login' || location.pathname === '/register' ? 
        (
            <div>
                {children}
            </div>
        ) : (
            <Box display={isNonMobile ? 'flex' : 'block'} width='100%' height='100%'>
                <SideBarComponent
                    isNonMobile={isNonMobile}
                    drawerWidth='250px'
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
                <Box>
                    <TopBarComponent/>
                    {children} 
                </Box>
            </Box>
        )   
    );
};

export default LayoutComponent;