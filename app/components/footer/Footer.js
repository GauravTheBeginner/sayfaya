import { Box, Grid, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { helpfulLinks, contactInfo, mobileApps } from '@/lib/footer';
import Image from 'next/image';

function Footer() {
  const renderSocialIcon = (icon) => {
    switch (icon) {
      case 'facebook':
        return <FacebookIcon />;
      case 'instagram':
        return <InstagramIcon />;
      default:
        return null;
    }
  };


  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '20px 40px' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight={600}>
            Sayfaya
          </Typography>
          <Typography variant="body1" mt={1} color="text.secondary">
            Empowering and connecting our community
          </Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight={600}>
            Helpful Links
          </Typography>
          <Box mt={1}>
            {helpfulLinks.map((link, index) => (
              <Link key={index} href={link.url} underline="none" display="block" color="text.secondary" mb={1}>
                {link.text}
              </Link>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight={600}>
            Contact Us
          </Typography>
          <Typography variant="body1" mt={1} color="text.secondary">
            {contactInfo.address}
          </Typography>
          <Typography variant="body1" mt={1} color="text.secondary">
            Phone: <Link href={`tel:${contactInfo.phone}`} color="text.primary">{contactInfo.phone}</Link>
          </Typography>
          <Typography variant="body1" mt={1} color="text.secondary">
            E-Mail: <Link href={`mailto:${contactInfo.email}`} color="text.primary">{contactInfo.email}</Link>
          </Typography>
          <Box mt={2}>
            {contactInfo.socialLinks.map((social, index) => (
              <Link key={index} href={social.url} color="text.secondary" mr={1}>
                {renderSocialIcon(social.icon)}
              </Link>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight={600}>
            Get our Mobile App
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }} mt={1}>
            {mobileApps.map((app, index) => (
              <Link key={index} href={app.url} underline="none">
                <Image src={app.icon} alt="app icon"  height={55} />
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
