// components/Header.js
"use client";
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import logo from "@/public/image/Sayfaya-crop.png";
import Image from 'next/image';
import { nav } from '@/lib/header';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
const StyledLink = styled(Link)(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#444',
    fontSize: '13px',
    lineHeight: '32px',
    padding: '2px 15px',
    borderRadius: '50px',
    '&:hover': {
        backgroundColor: '#F2F8FA',
        color: '#7FB1D5',
    },
}));
export default function Navbar() {
    return (
        <Box sx={{  display: "flex", flexDirection: "column", gap: 1, paddingX: "2%", paddingY: "1%",justifyContent:"center",alignItems:"center"}}>
            <Box sx={{ display: "flex", justifyContent: "space-between",alignItems:"center",borderColor:"black",borderBottom:1, paddingY: "0.5%", paddingX: "2%",width:"100%",maxWidth:"1000px"}}>
                <Image src={logo} alt="SayFaya" style={{ height: "60px", width: "auto" }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton   aria-label="cart">
                        <Badge badgeContent={0}
                         color="primary" >
                            <ShoppingCartIcon  sx={{ fontSize: 18 }} />
                        </Badge>
                    </IconButton>
                    <Button sx={{
                        backgroundColor: "#f4f4f4",
                        borderRadius: "50px",
                        fontSize:"10px",
                        color: "#666",
                        ":hover": {
                            backgroundColor: "#3D86BF",
                            color: "white",
                            textDecoration:"underline"
                        },
                        padding: "4px 15px"
                    }}  startIcon={<PersonAddAltIcon sx={{fontSize: 5}} />} color="inherit">
                        Become a cleaner
                    </Button>
                </Box>
            </Box>
            <Grid container justifyContent="center" sx={{ gap: 1 ,paddingY:"1%" }}>
                {nav.map((item, index) => (
                    <Grid item key={index}>
                        <StyledLink href={item.link}>
                            {item.name}
                        </StyledLink>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
