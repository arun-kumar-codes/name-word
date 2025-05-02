import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  FormControlLabel,
  Checkbox,
  Container,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  Avatar,
  FormHelperText,
} from "@mui/material";
import { Google, Telegram, Star } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    agreeTerms: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    agreeTerms: false,
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const navigate = useNavigate();

  const testimonials = [
    {
      name: "Tom Richardson",
      initials: "TR",
      testimonial:
        "Since partnering, we've seen a significant increase in our client base. The team's professionalism and expertise in lead generation are evident in the quality of leads we receive. A fantastic service all around.",
      rating: 6,
    },
    {
      name: "Sarah Johnson",
      initials: "SJ",
      testimonial:
        "Nameword transformed our online presence completely. Their domain services are top-notch and the support team is incredibly responsive. Highly recommended for any business!",
      rating: 6,
    },
    {
      name: "Michael Chen",
      initials: "MC",
      testimonial:
        "The perfect combination of quality and affordability. We've been using Nameword for all our domains and couldn't be happier with the results and customer service.",
      rating: 6,
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Mark field as touched
    if (!touched[name]) {
      setTouched({
        ...touched,
        [name]: true,
      });
    }

    // Validate field if it's been touched
    if (touched[name]) {
      validateField(name, type === "checkbox" ? checked : value);
    }
  };

  const validateField = (name, value) => {
    let error = "";
    
    switch (name) {
      case "name":
        if (!value) {
          error = "Name is required";
        } else if (value.length < 2) {
          error = "Name must be at least 2 characters";
        }
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          error = "Email is required";
        } else if (!emailRegex.test(value)) {
          error = "Enter a valid email address, such as: john@example.com";
        }
        break;
      case "password":
        if (!value) {
          error = "Password is required";
        } else if (value.length < 6) {
          error = "Password must be at least 6 characters";
        }
        break;
      case "agreeTerms":
        if (!value) {
          error = "You must agree to the terms";
        }
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: error,
    });

    return !error;
  };

  const validateForm = () => {
    const validations = [
      validateField("name", formData.name),
      validateField("email", formData.email),
      validateField("password", formData.password),
      validateField("agreeTerms", formData.agreeTerms),
    ];

    return validations.every(Boolean);
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    if (!touched[name]) {
      setTouched({
        ...touched,
        [name]: true,
      });
    }
    validateField(name, type === "checkbox" ? checked : value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      password: true,
      agreeTerms: true,
    });

    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Here you would typically handle the sign-up logic
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column-reverse" : "row",
        minHeight: "100vh",
        p: isMobile ? 2 : 3,
        gap: isMobile ? 3 : 0,
      }}
    >
      {/* Left Side - Gradient Background with Content */}
      <Box
        sx={{
          width: isMobile ? "100%" : "50%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(to bottom right, rgb(142, 110, 219), rgb(85, 168, 253))",
          color: "white",
          borderRadius: "16px",
          p: 3,
          boxSizing: "border-box",
          justifyContent: "center",
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 6 }}>
          <Box
            sx={{
              width: 24,
              height: 24,
              bgcolor: "white",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                bgcolor: "black",
                borderRadius: "50%",
              }}
            />
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", fontSize: "1rem", color: "white" }}
          >
            Nameword
          </Typography>
        </Box>

        {/* Centered content block */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            maxWidth: 600,
            mx: "auto",
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "3rem" },
                color: "white",
                lineHeight: 1.3,
              }}
            >
              Blaze new trails with the perfect domain.
            </Typography>

            <Button
              variant="text"
              endIcon={<span style={{ fontSize: "1.2rem" }}>→</span>}
              sx={{
                color: "white",
                fontSize: "1rem",
                textTransform: "none",
                p: 0,
                mt: 2,
                "&:hover": {
                  backgroundColor: "transparent",
                  textDecoration: "underline",
                },
              }}
            >
              Start your search now
            </Button>
          </Box>

          <Divider sx={{ my: 3, backgroundColor: "rgba(255,255,255,0.3)" }} />

          {/* Testimonial Card */}
          <Box sx={{ p: 0 }}>
            <Card
              sx={{
                backgroundColor: "white",
                color: "text.primary",
                borderRadius: "12px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1,
                    gap: 2,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 48,
                      height: 48,
                      bgcolor: "primary.main",
                      color: "white",
                      fontSize: "1rem",
                    }}
                  >
                    {testimonials[currentTestimonial].initials}
                  </Avatar>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.25rem",
                    }}
                  >
                    {testimonials[currentTestimonial].name}
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    mb: 1,
                    lineHeight: 1.6,
                    fontSize: "1rem",
                  }}
                >
                  {testimonials[currentTestimonial].testimonial}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    mb: 1,
                  }}
                >
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        sx={{ color: "gold", fontSize: "1.25rem" }}
                      />
                    )
                  )}
                </Box>
              </CardContent>
            </Card>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 3,
                gap: 1,
              }}
            >
              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor:
                      index === currentTestimonial
                        ? "primary.main"
                        : "grey.300",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Right Side - Registration Form */}
      <Box
        sx={{
          width: isMobile ? "100%" : "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: isMobile ? 2 : 5,
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ maxWidth: 550, mx: "auto", width: "100%" }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            textAlign="center"
          >
            Registration
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            textAlign="center"
            mb={4}
          >
            Create a free account and let the good times roll.
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              name="name"
              label="Your full name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.name && touched.name}
              helperText={errors.name && touched.name ? errors.name : ""}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
            />
            <TextField
              name="email"
              label="Email address"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.email && touched.email}
              helperText={errors.email && touched.email ? errors.email : ""}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.password && touched.password}
              helperText={errors.password && touched.password ? errors.password : ""}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
            />

            <Box>
              <FormControlLabel
                control={
                  <Checkbox 
                    name="agreeTerms" 
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                }
                label="I agree to Nameword's Terms, Privacy, and Fees."
              />
              {errors.agreeTerms && touched.agreeTerms && (
                <FormHelperText error sx={{ ml: 2 }}>
                  {errors.agreeTerms}
                </FormHelperText>
              )}
            </Box>

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                borderRadius: "12px",
                background:
                  "linear-gradient(to right, rgb(150, 100, 230), rgb(96, 50, 205))",
                color: "white",
                textTransform: "none",
                padding: "12px 16px",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Register
            </Button>

            <Divider sx={{ my: 2 }}>or</Divider>

            <Button
              variant="outlined"
              size="large"
              fullWidth
              startIcon={<Google />}
              sx={{
                py: 1.5,
                justifyContent: "center",
                pl: 2,
                textTransform: "none",
                borderRadius: "12px",
              }}
            >
              Register with Google
            </Button>

            <Button
              variant="outlined"
              size="large"
              fullWidth
              startIcon={<Telegram />}
              sx={{
                py: 1.5,
                justifyContent: "center",
                pl: 2,
                textTransform: "none",
                borderRadius: "12px",
              }}
            >
              Register with Telegram
            </Button>

            <Typography textAlign="center" mt={2}>
              Already have an account?{" "}
              <Button variant="text" onClick={() => navigate("/signin")}>
                Log in here
              </Button>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;