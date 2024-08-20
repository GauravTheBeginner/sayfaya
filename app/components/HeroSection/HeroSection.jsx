"use client";
import { Box, Grid, Typography, Button, TextField, MenuItem } from '@mui/material';
import backgroundImage from '@/public/image/hero-section/bg-img.jpeg'; 
const services = [
  { label: 'Car Wash', value: 'car_wash' },
  { label: 'Interior Cleaning', value: 'interior_cleaning' },
  { label: 'Full Service', value: 'full_service' },
];

function HeroSection() {
    return (
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.5)',
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100%', 
            padding: { xs: '20px', md: '40px' },
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              width: '100%',
              maxWidth: '1100px',
              padding: { xs: '20px', md: '40px' }, 
            }}
            justifyContent="center"
          >
            <Grid item xs={12}>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: '#fff', 
                  textAlign: 'center', 
                  fontWeight: '500', 
                  fontSize: { xs: '1.5rem', md: '41px' }
                }}
              >
                Convenient and hassle-free car cleaning at your doorstep.
              </Typography>
            </Grid>
  
            <Grid item xs={12}>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#fff', 
                  textAlign: 'center',
                  fontWeight: '300',
                  fontSize: { xs: '1rem', md: '24px' } 
                }}
              >
                No time for cleaning your car? Let our platform connect you with local mobile cleaners.
              </Typography>
            </Grid>
  
            <Grid item xs={12} md={10}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: { xs: 'column', sm: 'row' }, 
                  backgroundColor: '#fff',
                  borderRadius: '30px',
                  padding: '5px',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              >
                <TextField
                  placeholder="J874+QG Delhi, India"
                  variant="outlined"
                  sx={{
                    flex: 1,
                    marginRight: { xs: 0, sm: 2 }, 
                    marginBottom: { xs: 2, sm: 0 },
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '0',
                      '& fieldset': {
                        borderTop: 'none',
                        borderLeft: 'none',
                        borderBottom: 'none',
                      },
                     
                    },
                  }}
                />
                <TextField
                  type="date"
                  variant="outlined"
                  sx={{
                    flex: 1,
                    marginRight: { xs: 0, sm: 2 }, 
                    marginBottom: { xs: 2, sm: 0 },
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '0',
                      '& fieldset': {
                        borderTop: 'none',
                        borderLeft: 'none',
                        borderBottom: 'none',
                      },
                     
                    },
                  }}
                />
                <TextField
                  select
                  value=""
                  onChange={() => {}}
                  variant="outlined"
                  sx={{
                    flex: 1,
                    marginRight: { xs: 0, sm: 2 }, 
                    marginBottom: { xs: 2, sm: 0 },
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '0',
                      '& fieldset': {
                        border: 'none',
                      },
                     
                    },
                  }}
                >
                  {services.map((service) => (
                    <MenuItem key={service.value} value={service.value}>
                      {service.label}
                    </MenuItem>
                  ))}
                </TextField>
                <Button
                  variant="contained"
                  sx={{ 
                    borderRadius: '30px', 
                    padding: '10px 30px',
                    width: { xs: '100%', sm: 'auto' }, 
                    backgroundColor: '#3D86BF',
                    fontSize: { xs: '1rem', md: '1.10rem' },
                    fontWeight: '500',
                    //hover none
                    '&:hover': {
                      backgroundColor: '#3D86BF',
                    },
                  }}
                >
                  Book
                </Button>
              </Box>
            </Grid>
  
            <Grid item xs={12}>
              <Typography sx={{ textAlign: 'center', color: '#fff', marginTop: '20px', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                Starts at $39.99
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
  
  export default HeroSection;