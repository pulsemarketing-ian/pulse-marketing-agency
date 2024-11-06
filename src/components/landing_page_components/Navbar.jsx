import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import { Container } from '@mui/material';
import PrimaryBtn from '@/components/landing_page_components/PrimaryBtns/PrimaryBtn';
import { IoIosMail, IoIosCall } from "react-icons/io";

const Navbar = () => {
    const menuItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/app" },
        { label: "Services", path: "/services" },
        { label: "Portfolio", path: "/branding" },
        { label: "CRM", path: "#" },
        { label: "Blog", path: "/blog" },
    ];

    return (
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', position:'absolute' }}>
            <Container sx={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Toolbar disableGutters>
                    {/* Left side: Logo, visible on larger screens only */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'flex-start' }}>
                        <IconButton edge="start" color="inherit" aria-label="logo">
                            <img src="/white-logo.png" alt="Logo" style={{ height: '20px' }} />
                        </IconButton>   
                    </Box>

                    {/* Center: Navigation Items */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                        {menuItems.map((item) => (
                            <Link key={item.label} href={item.path} style={{ textDecoration: 'none' }}>
                                <MenuItem sx={{ color: 'white' }}>
                                    <Typography textAlign="center" sx={{ color: 'white', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>
                                        {item.label}
                                    </Typography>
                                </MenuItem>
                            </Link>
                        ))}
                    </Box>

                    {/* Right side: Buttons */}
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                        <PrimaryBtn text="Book" />
                        <button className="bg-transparent hover:bg-my-blue-gradient hover:text-my-blue-gradient border text-[14px] p-2 rounded-2xl">
                            <IoIosMail />
                        </button>
                        <button className="bg-transparent hover:bg-my-blue-gradient hover:text-my-blue-gradient border text-[14px] p-2 rounded-2xl">
                            <IoIosCall />
                        </button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
