import React from 'react'
import { Box, Grid, Typography, Link } from '@mui/material';
import Image from 'next/image';
import bbbLogo from "@/public/image/elementor/logo.svg"
import { mobileApps } from '@/lib/footer';
function Elementor() {
  return (
    <Box 
    sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      paddingX: "2%", paddingY: "1%", 
      textAlign: 'center' ,
      marginTop: { xs: 32, sm: 24 },
    }}
  >
    {/* BBB Logo */}
    <Box sx={{ marginBottom: 2 }}>
      <Image src={bbbLogo} alt="BBB Accredited Business" height={90} />
    </Box>

    {/* Download Text */}
    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000', marginBottom: 2 }}>
      Download Customer App
    </Typography>

    {/* App Store and Google Play Icons */}
    <Box sx={{ display: 'flex', gap: 2 }}>
    {mobileApps.map((app, index) => (
              <Link key={index} href={app.url} underline="none">
                <Image src={app.icon} alt="app icon" height={50} />
              </Link>
            ))}
    </Box>
  </Box>
  )
}

export default Elementor