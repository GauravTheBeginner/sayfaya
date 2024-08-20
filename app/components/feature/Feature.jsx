import { Box, Grid, Typography } from '@mui/material';
import { feature } from '@/lib/feature';
import Image from 'next/image';
function WhyChooseUs() {

  return (
    <Box sx={{ textAlign: 'center', paddingX: "2%", paddingY: "1%", display:"flex",flexDirection: "column",justifyContent:"center", alignItems:"center"}} gap={3} marginY={3}>
      <Typography variant="h5" fontWeight={600} mb={4}>
        Why choose SayFaya
      </Typography>
      <Grid container spacing={0} sx={{
        width: '90%',
        maxWidth: '1000px',
      }} justifyContent="center">
        {feature.map((item, index) => (
          <Grid item xs={12} sm={6} key={index} sx={{ display: 'flex' ,  borderRight: {
            xs: 'none', 
            lg: (index % 2 === 0 && index <= feature.length - 1) ? '1.5px solid #707070' : 'none', 
          },
          }}>
            <Box
              sx={{
                backgroundColor: '#4682b4', 
                paddingX: '80px',
                paddingY: '18px',
                color: '#fff',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '80px',
                border: '1px solid #4682b4', 
              }}
            >
                <Image src={item.icon} alt={item.alt} width={40} height={40} />
              <Typography sx={{fontSize:"20px"}} fontWeight={600} mt={2}>
                {item.title}
              </Typography>
              <Typography sx={{fontSize:"13px"}} variant="body1" mt={1}>
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WhyChooseUs;
