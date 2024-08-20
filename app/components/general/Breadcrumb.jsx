import React from 'react'
import { Box, Typography, Link } from '@mui/material';
import Image from 'next/image';
import right from "@/public/image/footer/right.svg";
function Breadcrumb({ title }) {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingX: "2%",
      paddingY: "3%",
      textAlign: 'center',
      backgroundColor: "#F8F8F8",
      color: "#707070",
      fontFamily: "Railway",
    }}>
      <Box sx={{ marginBottom: 2,  width: "85%", maxWidth: "1100px", display: "flex", justifyContent: "space-between", paddingY: "0.5%", paddingX: "1%", alignItems: "center" , flexDirection: { xs: 'column', sm: 'row' },}}>
        <Typography variant="h1" sx={{ fontSize: "32px" ,lineHeight:"40px"}} fontWeight={400}>
          {title}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }} variant="body1">
          <Link
            href={"/"}
            sx={{
              fontSize: "13px",
              fontWeight: 400,
              color: "text.secondary",
              position: "relative",

            }}
            underline="none"
          >Sayfaya</Link>
          <Image src={right} alt="icon" style={{ marginTop: "3px" }} height={10} width={10} />
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 400,
              color: "text.secondary",
              position: "relative",

            }}
            underline="none"
          >{title}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Breadcrumb