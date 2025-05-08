import React from "react";
import {
  Box,
  Typography,
  InputBase,
  Button,
  Paper,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GetNewDomainCard from "./GetNewDomainCard";
import DomainIcon from "@mui/icons-material/Domain";
import PersonalInjuryIcon from "@mui/icons-material/PersonalInjury";
import CustomerShowcaseCard from "./CustomerShowCaseCard";
import DummySearchBar from "./DummySearchbar";

const Overview = () => {
  const commonCards = [
    {
      icon: <DomainIcon sx={{ fontSize: 32, color: "#fff" }} />,
      title: "Get new domain",
      description:
        "Find the perfect domain name using quick search from our range of available extensions",
      buttonText: "Get new domain",
    },
    {
      icon: <PersonalInjuryIcon sx={{ fontSize: 32, color: "#fff" }} />,
      title: "Transfer your domain into Nameword",
      description:
        "Easily transfer your existing domain with our fast and secure service",
      buttonText: "Transfer Now",
    },
  ];

  return (
    <Box
      sx={{
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 2,
        background: "#3915A3",
        pt: 8,
        pb: 10,
      }}
    >
      <Typography variant="h3" fontWeight="bold" sx={{ mb: 2, textAlign: "center" }}>
        Looking For The Perfect
        <br />
        <Typography variant="h2" fontWeight="bold" component="span">
          Domain?
        </Typography>
      </Typography>

      <Typography
        variant="h6"
        color="rgba(255, 255, 255, 0.7)"
        sx={{ mb: 4, textAlign: "center" }}
      >
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
          mb: 6,
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

      {/* Cards Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1e1b4b, #2e1065)",
          borderRadius: "20px",
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 4 },
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {/* First two cards from array */}
          {commonCards.map((card, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box sx={{ height: "100%", display: "flex", justifyContent: "center" }}>
                <GetNewDomainCard {...card} onClick={() => console.log("Clicked", card.title)} />
              </Box>
            </Grid>
          ))}

          {/* Additional cards independently rendered */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ height: "100%", display: "flex", justifyContent: "center" }}>
          <CustomerShowcaseCard/>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ height: "100%", display: "flex", justifyContent: "center",  }}>
            <DummySearchBar/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Overview;
