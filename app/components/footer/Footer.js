import { Box, Grid, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { helpfulLinks, contactInfo, mobileApps } from '@/lib/footer';
import Image from 'next/image';
import right from "@/public/image/footer/right.svg";
function Footer() {

  return (
    <Box sx={{ borderTop:1,borderColor:"rgba(0, 0, 0, 0.09)", padding: "70px 0px 0px 0px", display: "flex", justifyContent: "center", alignItems: "center" ,flexDirection:"column"}}>
      <Grid sx={{ paddingX: "2%", paddingY: "1%", width: "100%", maxWidth: "1000px" }} container spacing={4}>
        <Grid item xs={12} md={3}>
          <Typography variant="h4" sx={{ fontSize: "21px", marginBottom: "25px", color: "#333" }} fontWeight={400}>
            Sayfaya
          </Typography>
          <Typography sx={{ fontSize: "13px", lineHeight: "29px" }} color="text.secondary">
            Empowering and connecting our community
          </Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h4" sx={{ fontSize: "21px", marginBottom: "25px", color: "#333" }} fontWeight={400}>
            Helpful Links
          </Typography>
          <Box mt={1} sx={{ width: "45%" }}>
            {helpfulLinks.map((link, index) => (
              <>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Image src={right} alt="icon" style={{ marginTop: "3px" }} height={10} width={10} />
                  <Link
                    key={index}
                    href={link.url}
                    sx={{
                      fontSize: "13px",
                      fontWeight: 400,
                      display: "block",
                      color: "text.secondary",
                      mb: 1,
                      position: "relative",
                      transition: "all 0.3s ease",
                      '&:hover': {
                        color: "#3c87bf",
                        transform: "translateX(5px)",
                        textDecoration: "underline",
                      },
                    }}
                    underline="none"
                  >
                    {link.text}
                  </Link>
                </Box>
              </>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h4" sx={{ fontSize: "21px", marginBottom: "25px", color: "#333" }} fontWeight={400}>
            Contact Us
          </Typography>

          <Typography sx={{ fontSize: "13px", lineHeight: "29px", color: "#3c87bf" }} mt={1} color="text.secondary">
            <Link
              href={contactInfo.address_url}
              color="#3c87bf"
              sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
            >
              {contactInfo.address}
            </Link>
          </Typography>

          <Typography sx={{ fontSize: "13px", lineHeight: "29px" }} mt={1} color="text.secondary">
            Phone:
            <Link
              href={`tel:${contactInfo.phone}`}
              color="#3c87bf"
              sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
            >
              {contactInfo.phone}
            </Link>
          </Typography>

          <Typography sx={{ fontSize: "13px", lineHeight: "29px" }} mt={1} color="text.secondary">
            E-Mail:
            <Link
              href={`mailto:${contactInfo.email}`}
              color="#3c87bf"
              sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
            >
              {contactInfo.email}
            </Link>
          </Typography>

          <Box mt={2}>
            {contactInfo.socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                color="#3c87bf"
                mr={1}
                sx={{
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                    '& img': {
                      transform: 'scale(1.1)',  
                      transition: 'transform 0.2s ease-in-out',  
                    },
                  },
                }}
              >
                <Image src={social.icon} alt="social icon" height={20} />
              </Link>
            ))}
          </Box>

        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h4" sx={{ fontSize: "21px", marginBottom: "25px", color: "#333" }} fontWeight={400}>
            Get our Mobile App
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }} mt={1}>
            {mobileApps.map((app, index) => (
              <Link key={index} href={app.url} underline="none">
                <Image src={app.icon} alt="app icon" height={55} />
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Box sx={{  width: '100%', padding: '10px 0', textAlign: 'center', borderTop:1,borderColor:"rgba(0, 0, 0, 0.09)",maxWidth: "1000px",marginTop:"60px",padding:"30px 0" }}>
        <Typography sx={{ fontSize: "12px", color: "text.secondary" }}>
         © 2018 - 2023 |  <Link
              href={"/"}
              color="#3c87bf"
              sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
            >
              Sayfaya
            </Link> | All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
