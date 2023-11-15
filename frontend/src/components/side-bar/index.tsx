import React, { useEffect, useState } from 'react';
import './styles.css';
import {Box, Drawer, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, 
    Typography, useTheme} from "@mui/material"
import {ChevronLeft, ChevronRight, LogoutOutlined} from "@mui/icons-material";
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from '../flex-between';
import { navMenu } from '../../common/moks/navigate';
// import Logo from '../../assets/images/side-bar/logo.png';

const SideBarComponent = (props: any) => {
    const [active, setActive] = useState('')
    const {isNonMobile, drawerWidth, isOpen, setIsOpen} = props
    const {pathname} = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        setActive(pathname)
    }, [pathname])

    const renderNavMenu = navMenu.map((element) => {
        return (
            <ListItem key={element.id}>
                <ListItemButton onClick={() => navigate(`${element.path}`)} className='navItemButton'>
                    <ListItemIcon className='navItemIcon'>
                        {element.icon}
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant='body1'>{element.name}</Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        )
    })

  return (
    <Box component='nav'>
        {isOpen && (
            <Drawer 
                open={isOpen} 
                onClose={() => setIsOpen(false)} 
                variant='persistent' 
                anchor='left'
                sx={{
                    width: drawerWidth,
                    '& .MuiDrawer-paper': {
                        color: '#484E5E',
                        backgroundColor: '#ffffff',
                        boxSizing: 'border-box',
                        width: drawerWidth
                    }
                }}
            >
                <Box width='100%' sx={{borderBottom: '1px solid #757575'}}>
                    <Box>
                        <FlexBetween>
                            <Box className='BrandTextLogo'>
                                <Typography className='TextLogo'>PROFITPILOT</Typography>
                            </Box>
                            {!isNonMobile && (
                                <IconButton onClick={() => setIsOpen(!isOpen)}>
                                    <ChevronLeft/>
                                </IconButton>
                            )}
                        </FlexBetween>
                    </Box>
                    <List sx={{marginBottom: '50px'}}>{renderNavMenu}</List>
                </Box>
                <Box width='100%'>
                    <List>
                        <ListItem>
                            <ListItemButton className='navItemButton'>
                                <ListItemIcon className='navItemIcon'>
                                    <LogoutOutlined/>
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography>Вихід</Typography>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        )}
    </Box>
  );
};

export default SideBarComponent;
