import { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Navbar at the top */}
      <Navbar onMenuClick={handleDrawerToggle} />

      {/* Main content fills remaining height */}
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflow: "auto", // optional: add scroll if needed
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
