import { ListItem, ListItemIcon, ListItemText, Box, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import menuConfig from '../../assets/configs/menuConfig';

import { useState } from 'react';

const NavBarItems = () => {
    const location = useLocation();
    const isMobile = useMediaQuery('(max-width:600px)');
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        if (anchorEl) {
            handleMenuClose(); // Close if already open
        } else {
            setAnchorEl(event.currentTarget); // Open if closed
        }
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    if (isMobile) {
        // Mobile: show hamburger menu
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenuOpen}
                    sx={{ color: '#f5f5f5' }}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                >
                    {menuConfig.sidebarData.map((item) => (
                        <MenuItem
                            component={Link}
                            to={item.path}
                            key={item.id}
                            onClick={handleMenuClose}
                            selected={location.pathname === item.path}
                            sx={{ minWidth: 120 }}
                        >
                            <ListItemIcon sx={{ color: '#263238', minWidth: 40 }}>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title} />
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        );
    }

    // Desktop: show nav items as before
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: 2,
                flexWrap: { xs: 'wrap', sm: 'nowrap' },
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'center', sm: 'flex-start' },
            }}
        >
            {menuConfig.sidebarData.map((item) => (
                <ListItem
                    component={Link}
                    to={item.path}
                    key={item.id}
                    sx={{
                        color: location.pathname === item.path ? '#ffffff' : '#f5f5f5',
                        display: 'flex',
                        alignItems: 'center',
                        padding: 2,
                        borderBottom: location.pathname === item.path ? '3px solid #ffffff' : 'none',
                    }}
                >
                    <ListItemIcon sx={{ color: '#f5f5f5', minWidth: 40 }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                </ListItem>
            ))}
        </Box>
    );
};

export default NavBarItems;
