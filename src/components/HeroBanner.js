import React from "react";
import HeroBannerImg from "../assets/images/banner.png";
import { Box, Stack, Typography, Button } from "@mui/material";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Shape Up
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat today,
        <br /> Shine tomorrow
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Transform your body, transform your life with our comprehensive <br />
        resources
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        fontSize="200px"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
