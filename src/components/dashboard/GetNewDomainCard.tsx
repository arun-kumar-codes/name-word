import React from "react";
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";

const GetNewDomainCard = ({
  icon,
  title,
  description,
  buttonText,
  onClick,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        background: "#1F2450",
        borderRadius: "16px",
        padding: isMobile ? "16px" : "24px",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        maxWidth: "650px",
        width: "100%",
        color: "#fff",
        boxSizing: "border-box",
      }}
    >
      {/* Left Circular Icon - Scaled down for mobile */}
      <Box
        sx={{
          width: isMobile ? 48 : 64,
          height: isMobile ? 48 : 64,
          borderRadius: "50%",
          backgroundColor: "#FFFFFF21",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {React.cloneElement(icon, {
          style: {
            width: isMobile ? 24 : 32,
            height: isMobile ? 24 : 32,
          }
        })}
      </Box>

      {/* Text Content - Scaled down for mobile */}
      <Box sx={{ 
        marginLeft: isMobile ? "12px" : "24px", 
        textAlign: "start",
        flex: 1,
        minWidth: 0, // Prevents overflow
      }}>
        <Typography
          sx={{
            fontSize: isMobile ? "16px" : "18px",
            fontWeight: 600,
            fontFamily: "inherit",
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: isMobile ? "12px" : "14px",
            color: "#C5C8F0",
            marginTop: "4px",
            maxWidth: 400,
            lineHeight: 1.3,
          }}
        >
          {description}
        </Typography>

        <Button
          variant="contained"
          onClick={onClick}
          sx={{
            mt: isMobile ? 1 : 2,
            borderRadius: "20px",
            textTransform: "none",
            padding: "6px 16px",
            fontSize: isMobile ? "12px" : "13px",
            background: "linear-gradient(90deg, #4AD5DF 0%, #3D8BFD 100%)",
            boxShadow: "none",
            "&:hover": {
              background: "linear-gradient(90deg, #3D8BFD 0%, #4AD5DF 100%)",
              boxShadow: "none",
            },
          }}
        >
          {buttonText}
        </Button>
      </Box>

      {/* Right Decorative Half Circle - Scaled down for mobile */}
      <Box
        sx={{
          position: "absolute",
          right: isMobile ? 15 : 25,
          bottom: isMobile ? -70 : -90,
          width: isMobile ? 120 : 160,
          height: isMobile ? 120 : 160,
          borderRadius: "50%",
          background: "#FFFFFF21",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: isMobile ? 90 : 120,
            height: isMobile ? 90 : 120,
            borderRadius: "50%",
            right: isMobile ? 15 : 20,
            bottom: isMobile ? 15 : 20,
            background: "#1F2450",
          }}
        />
      </Box>
    </Box>
  );
};

export default GetNewDomainCard;