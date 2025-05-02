import React from "react";
import { Box, Typography, InputBase, Button, Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Overview = () => {
  return (
    <Box
      sx={{
        color: "#fff",
        height:'calc(100vh - 80px)',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        textAlign: "center",
        background: '#3915A3',
      }}
    >
      <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
        Looking For The Perfect
        <br />
        <Typography variant="h2" fontWeight="bold" component="span">
          Domain?
        </Typography>
      </Typography>

      <Typography variant="h6" color="rgba(255, 255, 255, 0.7)" sx={{ mb: 4 }}>
        Nameword Is Trusted By Businesses And Brands That Value Online Credibility
      </Typography>

      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          maxWidth: 800,
          width: "100%",
          borderRadius: "999px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          overflow: "hidden",
        }}
      >
        <Box sx={{ pl: 3, pr: 1, color: "#aaa", display: "flex" }}>
          <MenuIcon />
        </Box>
        <InputBase
          placeholder="Search your dream domain name or keyword..."
          sx={{
            flex: 1,
            py: 2,
            px: 1,
            color: "#fff",
            "::placeholder": { color: "#aaa" },
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{
            px: 4,
            py: 2,
            borderRadius: 0,
            borderTopRightRadius: "999px",
            borderBottomRightRadius: "999px",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Search Now
        </Button>
      </Paper>
    </Box>
  );
};

export default Overview;
