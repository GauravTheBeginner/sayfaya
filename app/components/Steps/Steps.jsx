import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { steps } from '@/lib/steps';
function Steps() {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      paddingX: "2%", paddingY: "1%",

    }}
      marginY={3} 
      gap={3}>
      <Typography variant='h5' fontWeight={600} sx={{ padding: "10px" }}>How it works ?</Typography>
      <Grid
        container
        spacing={6}
        sx={{
          width: "100%",
          maxWidth: "1000px",
        }}
        justifyContent="center"
      >
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
              gap={2}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "2px solid rgb(111,193,229)",
                  borderRadius: "50%",
                  height: "100px",
                  width: "100px",
                }}
              >
                <Image src={step.icon} alt={step.alt} width={50} height={50} />
              </Box>
              <Typography variant="h6" fontWeight={600} component="p" mt={2}>
                {step.title}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>

    </Box>
  )
}

export default Steps