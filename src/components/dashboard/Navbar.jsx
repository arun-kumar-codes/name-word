import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Select,
  MenuItem,
  Box,
  useMediaQuery,
  useTheme,
  styled,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import ChatIcon from "@mui/icons-material/Chat";
import AppsIcon from "@mui/icons-material/Apps";

const ResponsiveButton = styled(Button)(({ theme }) => ({
  borderRadius: "50px",
  textTransform: "none",
  fontWeight: 600,
  padding: "6px 12px",
  fontSize: "14px",
  [theme.breakpoints.up("lg")]: {
    padding: "6px 16px",
    fontSize: "16px",
  },
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
}));

const PurpleButton = styled(ResponsiveButton)(({ theme }) => ({
  background: "linear-gradient(90deg, #5F33E1 0%, #6236E3 100%)",
  color: "white",
  "&:hover": {
    background: "#4D28C9",
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  borderRadius: "24px",
  textTransform: "none",
  fontWeight: 500,
  padding: "6px 12px",
  fontSize: "14px",
  minWidth: "auto",
  whiteSpace: "nowrap",
  backgroundColor: "blue",

  [theme.breakpoints.up("lg")]: {
    padding: "8px 16px",
    fontSize: "16px",
  },
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.1)",
  },
}));

const Navbar = () => {
  const [language, setLanguage] = useState("EN");
  const [themeMode, setThemeMode] = useState("light");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    if (!isMobile && drawerOpen) {
      setDrawerOpen(false);
    }
  }, [isMobile, drawerOpen]);

  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        boxShadow: "none",
        padding: 0,
      }}
    >
      <Box
        sx={{
          width: "100%",
          background: "linear-gradient(90deg, #3915A3 0%, #4B1FA6 100%)",
        }}
      >
        <Container
          maxWidth={false}
          disableGutters
          sx={{ px: isMobile ? 2 : 3 }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              padding: "8px 0",
              minHeight: "64px !important",
            }}
          >
            {/* Left side (Logo) */}
            <Box display="flex" alignItems="center" gap={1}>
              {isMobile && (
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{ color: "white", mr: 1 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <AppsIcon sx={{ color: "white", fontSize: 28 }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "18px", sm: "20px" },
                  color: "white",
                  letterSpacing: "0.5px",
                }}
              >
                NameWord
              </Typography>
            </Box>

            {isMobile ? (
              <Box display="flex" alignItems="center" gap={1}>
                <Select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  variant="outlined"
                  size="small"
                  sx={{
                    height: "36px",
                    width: "80px",
                    backgroundColor: "#1D0D4C",
                    color: "white",
                    borderRadius: "10px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "white",
                    },
                  }}
                >
                  <MenuItem value="EN">EN</MenuItem>
                </Select>
                <ResponsiveButton
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "#3D0F9E",
                  }}
                >
                  Sign Up
                </ResponsiveButton>
              </Box>
            ) : (
              <Box
                display="flex"
                alignItems="center"
                gap={isMediumScreen ? 1 : 2}
              >
                {/* Desktop Navigation */}
                <Box
                  sx={{
                    display: "flex",
                    gap: { md: '12px', lg: '16px', xl: '20px' },
                    background:
                      "linear-gradient(90deg, #5F33E1 0%, #6236E3 100%)",
                    borderRadius: "40px",
                    padding: "10px",
                    mr: isMediumScreen ? 0 : 1,
                    flexWrap: "nowrap",
                    overflowX: "auto",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                  }}
                >
                  {["Home", "Services", "Rates", "Contact", "FAQ"].map(
                    (item, index) => (
                      <NavButton
                        key={item}
                        sx={{
                          color: index === 0 ? "white" : "#C3BFF3",
                          backgroundColor: index === 0 ? "#8D6DFD" : "#3915A3",
                          "&:hover": {
                            backgroundColor:
                              index === 0 ? "#7C5CF2" : "rgba(255,255,255,0.1)",
                          },
                        }}
                      >
                        {item}
                      </NavButton>
                    )
                  )}
                </Box>

                {/* Right side controls */}
                <Box
                  display="flex"
                  alignItems="center"
                  gap={isMediumScreen ? 1 : 2}
                >
                  {/* Language Selector - Hide on medium screens if needed */}
                  {!isMediumScreen && (
                    <Select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      variant="outlined"
                      size="small"
                      sx={{
                        height: "36px",
                        width: "80px",
                        backgroundColor: "#1D0D4C",
                        color: "white",
                        borderRadius: "10px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSvgIcon-root": {
                          color: "white",
                        },
                      }}
                    >
                      <MenuItem value="EN">EN</MenuItem>
                    </Select>
                  )}

                  {/* Theme Toggle */}
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <IconButton
                      onClick={() => setThemeMode("light")}
                      sx={{
                        backgroundColor:
                          themeMode === "light" ? "#8D6DFD" : "transparent",
                        color: "white",
                        width: 36,
                        height: 36,
                      }}
                    >
                      <Brightness7Icon fontSize="small" />
                    </IconButton>
                    <IconButton
                      onClick={() => setThemeMode("dark")}
                      sx={{
                        backgroundColor:
                          themeMode === "dark" ? "#8D6DFD" : "transparent",
                        color: "white",
                        width: 36,
                        height: 36,
                      }}
                    >
                      <Brightness2Icon fontSize="small" />
                    </IconButton>
                  </Box>

                  {/* Auth Buttons */}
                  <Box display="flex" gap={1}>
                    <ResponsiveButton
                      variant="contained"
                      sx={{
                        backgroundColor: "white",
                        color: "#3D0F9E",
                        display: isMediumScreen ? "none" : "inline-flex",
                      }}
                    >
                      Sign In
                    </ResponsiveButton>

                    <PurpleButton
                      sx={{
                        display: isMediumScreen ? "none" : "inline-flex",
                      }}
                    >
                      Create FREE Account
                    </PurpleButton>

                    {/* Condensed auth button for medium screens */}
                    {isMediumScreen && (
                      <ResponsiveButton
                        variant="contained"
                        sx={{
                          backgroundColor: "white",
                          color: "#3D0F9E",
                          minWidth: "auto",
                        }}
                      >
                        Sign Up
                      </ResponsiveButton>
                    )}
                  </Box>
                </Box>
              </Box>
            )}
          </Toolbar>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            backgroundColor: "#4B1FA6",
            color: "white",
            width: "280px",
          },
        }}
      >
        <Box sx={{ padding: 2 }}>
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <AppsIcon sx={{ color: "white" }} />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              NameWord
            </Typography>
          </Box>

          <List>
            <ListItem button>
              <ListItemIcon sx={{ color: "white" }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon sx={{ color: "white" }}>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>
            <ListItem button>
              <ListItemIcon sx={{ color: "white" }}>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="Live Chat" />
            </ListItem>
          </List>

          <Box mt={3} display="flex" gap={1}>
            <IconButton
              onClick={() => setThemeMode("light")}
              sx={{
                color: "white",
                backgroundColor:
                  themeMode === "light" ? "#8D6DFD" : "transparent",
              }}
            >
              <Brightness7Icon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={() => setThemeMode("dark")}
              sx={{
                color: "white",
                backgroundColor:
                  themeMode === "dark" ? "#8D6DFD" : "transparent",
              }}
            >
              <Brightness2Icon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;