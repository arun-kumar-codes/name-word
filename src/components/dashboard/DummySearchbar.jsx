import React from "react";
import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const DummySearchBar = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #0B0F2A, #1A1D40)",
        borderRadius: "20px",
        px: 2,
        py: 1,
        display: "flex",
        alignItems: "center",
        width: "400px",
        maxWidth: "90%",
        position: "relative",
        color: "#ccc",
        fontFamily: "sans-serif",
      }}
    >
      {/* Search Icon */}
      <SearchIcon sx={{ mr: 1, color: "white" }} />

      {/* Dummy Text */}
      <Typography sx={{ color: "white", fontSize: "14px" }}>
        https://example
      </Typography>

      {/* Green Arrow + Badge */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "140px",
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Green Pointer */}
        <Box
          sx={{
            width: 0,
            height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderBottom: "10px solid #00b360",
            transform: "rotate(90deg)",
            mr: "-6px",
            zIndex: 2,
          }}
        />
        {/* Green Label */}
        <Box
          sx={{
            backgroundColor: "#00b360",
            px: 2,
            py: "4px",
            borderRadius: "20px",
            zIndex: 1,
          }}
        >
          <Typography sx={{ fontSize: "13px", color: "white" }}>
            Carlos
          </Typography>
        </Box>
      </Box>

      {/* Decorative Dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: -6,
          right: 20,
          display: "flex",
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: 6,
            height: 6,
            backgroundColor: "#6C5DD3",
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            width: 6,
            height: 6,
            backgroundColor: "#00D1A0",
            borderRadius: "50%",
          }}
        />
      </Box>
    </Box>
  );
};

export default DummySearchBar;
