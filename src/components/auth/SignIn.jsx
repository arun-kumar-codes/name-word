import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Container,
  Avatar,
  Stack,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Google as GoogleIcon,
  Telegram as TelegramIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; 


const SignInPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!touched.email) setTouched({ ...touched, email: true });
    if (touched.email) validateEmail();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!touched.password) setTouched({ ...touched, password: true });
    if (touched.password) validatePassword();
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address, such as: john@example.com");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mark both fields as touched when submitting
    setTouched({
      email: true,
      password: true,
    });
    
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      console.log("Form submitted:", { email, password });
      // Here you would typically handle the sign-in logic
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        minHeight: "100vh",
        p: isMobile ? 2 : 3,
        gap: isMobile ? 3 : 0,
      }}
    >
      {/* Left Side - SignIn Form */}
      <Box
        sx={{
          width: isMobile ? "100%" : "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          order: 1,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: isMobile ? "100%" : "80%",
            display: "flex",
            flexDirection: "column",
            p: isMobile ? 2 : 0,
          }}
        >
          {/* Header */}
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Sign In
          </Typography>

          {/* Email Field */}
          <>
            <Typography
              variant="subtitle1"
              sx={{ mt: 3, mb: 1, fontWeight: "medium" }}
            >
              Email address
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="nicki@gmowergram"
              value={email}
              onChange={handleEmailChange}
              onBlur={validateEmail}
              error={!!emailError && touched.email}
              helperText={emailError && touched.email ? emailError : ""}
              sx={{ 
                mb: 1,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                }
              }}
            />

            {/* Password Field */}
            <Typography
              variant="subtitle1"
              sx={{ mt: 3, mb: 1, fontWeight: "medium" }}
            >
              Password
            </Typography>
            <FormControl
              fullWidth
              variant="outlined"
              error={!!passwordError && touched.password}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                }
              }}
            >
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                placeholder="*********"
                value={password}
                onChange={handlePasswordChange}
                onBlur={validatePassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText>
                {passwordError && touched.password ? passwordError : ""}
              </FormHelperText>
            </FormControl>

            {/* Reset Password */}
            <Button
              variant="text"
              size="small"
              sx={{
                alignSelf: "flex-end",
                textTransform: "none",
                mt: 1,
                color: "rgb(28, 35, 169)",
              }}
            >
              Reset password
            </Button>

            <Divider sx={{ my: 4 }} />

            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleSubmit}
              sx={{
                mb: 3,
                borderRadius: "12px",
                background: "linear-gradient(to right,rgb(137, 135, 219),rgb(28, 35, 169))",
                "&:hover": {
                  background: "linear-gradient(to right, rgb(137, 135, 219), rgb(28, 35, 169))",
                },
                color: "white",
                textTransform: "none",
                padding: "10px 16px",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Sign In
            </Button>

            <Typography variant="body1" align="center" sx={{ mb: 3 }}>
              or
            </Typography>

            {/* Social Sign-In Options */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{
                  py: 1.5,
                  justifyContent: "center",
                  pl: 2,
                  textTransform: "none",
                  borderRadius: '12px',
                }}
              >
                Sign In with Google
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<TelegramIcon />}
                sx={{
                  py: 1.5,
                  justifyContent: "center",
                  pl: 2,
                  textTransform: "none",
                  borderRadius: '12px',
                }}
              >
                Sign In with Telegram
              </Button>
            </Box>
          </>

          <Divider sx={{ my: 2 }} />

          {/* Create Account */}
          <Typography variant="body1" align="center" sx={{ mt: 2 }}>
            New to Nameword?{" "}
            <Button
              variant="text"
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                p: 0,
                "&:hover": { backgroundColor: "transparent" },
              }}
              onClick={() => navigate("/signup")}
            >
              Create a free account
            </Button>
          </Typography>
        </Box>
      </Box>

      {/* Right Side - Image with Reviews */}
      <Box
        sx={{
          width: isMobile ? "100%" : "50%",
          height: isMobile ? "400px" : "auto",
          minHeight: isMobile ? "400px" : "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          boxSizing: "border-box",
          borderRadius: "16px",
          order: 2,
          position: "relative",
          overflow: "hidden",
          mt: isMobile ? 2 : 0,
        }}
      >
        {/* Main Text */}

        <Divider></Divider>
        {/* Reviews Section */}
        <Box
          sx={{
            position: "absolute",
            bottom: isMobile ? 20 : 40,
            left: "50%",
            transform: "translateX(-50%)",
            width: isMobile ? "90%" : "80%",
            maxWidth: "90%",
            padding: 3,
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          {/* Main Heading */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              fontSize: isMobile ? "1rem" : "1.5rem",
              mb: 3,
            }}
          >
            Start turning your ideas into reality
          </Typography>

          {/* Bottom Section with Avatars and Rating */}
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {/* User Avatars on Left */}
            <Stack direction="row" spacing={-1} justifyContent="flex-start">
              {["A", "S", "J", "E", "M"].map((letter, index) => (
                <Avatar
                  key={index}
                  sx={{
                    width: 32,
                    height: 32,
                    border: "2px solid white",
                    bgcolor: `hsl(${index * 70}, 70%, 50%)`,
                  }}
                >
                  {letter}
                </Avatar>
              ))}
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: "grey.300",
                  fontSize: "0.75rem",
                }}
              >
                +15
              </Avatar>
            </Stack>

            {/* Rating and Reviews on Right */}
            <Box sx={{ textAlign: "right" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Rating value={5} readOnly sx={{ color: "gold" }} />
                <Typography variant="body1" sx={{ fontWeight: "bold", ml: 1 }}>
                  5.0
                </Typography>
              </Box>
              <Typography variant="body2">From 200+ reviews</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignInPage;