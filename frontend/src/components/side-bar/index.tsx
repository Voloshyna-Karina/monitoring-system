import React, { useEffect, useState } from 'react';
import {Box, Drawer, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, 
    Typography, useTheme} from "@mui/material"
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {CollectionsBookmarkOutlined, MovingOutlined, AssuredWorkloadOutlined, DevicesOutlined} from "@mui/icons-material";
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined'; //товар
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined'; //аналітика
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined'; //транзакції
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined'; //каси
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from '../flex-between';

const SideBarComponent = (props: any) => {
    const [active, setActive] = useState('')
    const {isNonMobile, drawerWidth, isOpen, setIsOpen} = props
    const {pathname} = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        setActive(pathname)
    }, [pathname])

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
                <Box width='100%'>
                    <Box>
                        <FlexBetween>
                            <Box display='flex' alignItems='center' gap='10px'>
                                <Typography>PROFITPILOT</Typography>
                            </Box>
                            {!isNonMobile && (
                                <IconButton onClick={() => setIsOpen(!isOpen)}>
                                    <ChevronLeft/>
                                </IconButton>
                            )}
                        </FlexBetween>
                    </Box>
                </Box>
            </Drawer>
        )}
    </Box>
  );
};

export default SideBarComponent;
