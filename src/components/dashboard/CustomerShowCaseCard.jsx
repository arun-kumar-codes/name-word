import React from "react";
import { Box, Typography, Avatar, useTheme, useMediaQuery } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const avatarUrls = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/women/75.jpg",
  "https://randomuser.me/api/portraits/men/41.jpg",
  "https://randomuser.me/api/portraits/women/60.jpg",
  "https://randomuser.me/api/portraits/men/82.jpg",
  "https://randomuser.me/api/portraits/men/30.jpg",
  "https://randomuser.me/api/portraits/men/99.jpg",
  "https://randomuser.me/api/portraits/women/60.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
];

const CustomerShowcaseCard = () => {
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
      {/* Background SVG Line */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <svg width="100%" height={isMobile ? "100" : "150"} viewBox="0 0 900 150" fill="none">
          <path
            d="M850 20 C700 80, 300 40, 200 100"
            stroke="#C5C8F0"
            strokeWidth="2"
            strokeDasharray="8 8"
            fill="none"
          />
        </svg>
      </Box>

      {/* Left Card */}
      <Box
        sx={{
          background: "#1F2450",
          borderRadius: "20px",
          px: isMobile ? 2 : 4,
          py: isMobile ? 2 : 3,
          pl: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1,
          flex: 1,
          minWidth: 0,
          width: "100%",
        }}
      >
        {/* Avatars Overlapping */}
        <Box sx={{ display: "flex", mb: 1 }}>
          {avatarUrls.map((src, index) => (
            <Avatar
              key={index}
              src={src}
              alt={`User ${index}`}
              sx={{
                width: isMobile ? 32 : 40,
                height: isMobile ? 32 : 40,
                border: "2px solid #1F2450",
                marginLeft: index === 0 ? 0 : -1.5,
                zIndex: avatarUrls.length - index,
              }}
            />
          ))}
        </Box>

        {/* Text */}
        <Typography
          sx={{
            fontSize: isMobile ? "12px" : "14px",
            color: "#fff",
            textAlign: "center",
            fontFamily: "inherit",
            whiteSpace: "nowrap",
          }}
        >
          several customers around the world
        </Typography>
      </Box>

      {/* Right Icon in Hexagon */}
      <Box
        sx={{
          width: isMobile ? 48 : 60,
          height: isMobile ? 48 : 60,
          backgroundColor: "#3C3F77",
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: isMobile ? 2 : 3,
          zIndex: 1,
          flexShrink: 0,
        }}
      >
        <TrendingUpIcon sx={{ 
          color: "#fff",
          fontSize: isMobile ? "24px" : "28px" 
        }} />
      </Box>
    </Box>
  );
};

export default CustomerShowcaseCard;