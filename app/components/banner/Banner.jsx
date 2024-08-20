import React from 'react'
import { Box, Typography } from '@mui/material';
function Banner() {
  return (
    <Box sx={{
      backgroundColor: "#5192C6",
      paddingX: "2%", paddingY: "1%",
      fontSize: "25px",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontWeight: 600,
      fontFamily: "Roboto, Sans-serif",
      }}
      marginY={3}
      >
        <Typography sx={{padding: "10px"}}>
      Cleaners go through a mandatory background criminal check and every cleaning session is INSURED.
          </Typography>
      </Box>
  )
}

export default Banner