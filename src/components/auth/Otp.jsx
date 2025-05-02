import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  OutlinedInput,
  Grid,
  Tabs,
  Tab,
  CircularProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  '& .MuiOutlinedInput-input': {
    padding: '12px 14px',
    height: '20px',
  },
  height: '56px',
}));

const GradientButton = styled(Button)(({ theme }) => ({
  padding: '12px 24px',
  borderRadius: '12px',
  background: 'linear-gradient(to right, rgb(137, 135, 219), rgb(28, 35, 169))',
  '&:hover': {
    background: 'linear-gradient(to right, rgb(137, 135, 219), rgb(28, 35, 169))',
    opacity: 0.9,
  },
  color: 'white',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 'bold',
  marginTop: '16px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
}));

const OTPInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    width: '64px',
    height: '64px',
    '& input': {
      textAlign: 'center',
      fontSize: '24px',
      padding: '8px',
    },
  },
}));

const StyledTab = styled(Tab)(({ theme, selected }) => ({
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1rem',
  borderRadius: '8px',
  margin: '0 4px',
  minHeight: '48px',
  color: selected ? 'red' : theme.palette.text.primary,
  backgroundColor: selected ? 'black' : 'transparent',
  border: selected ? '1px solid black' : '1px solid rgba(0, 0, 0, 0.23)',
  '&.Mui-selected': {
    color: 'white', 
  },
  '&:hover': {
    backgroundColor: selected ? 'black' : 'rgba(0, 0, 0, 0.08)',
    border: '1px solid black',
  },
}));

const ExpiryTimer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  border: '1px solid rgba(0, 0, 0, 0.23)',
  padding: '8px 16px',
  marginBottom: '24px',
  width: 'fit-content',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

const countries = [
  { code: '+1', name: 'United States' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+91', name: 'India' },
  { code: '+61', name: 'Australia' },
  { code: '+33', name: 'France' },
  { code: '+49', name: 'Germany' },
  { code: '+81', name: 'Japan' },
];

const OTPVerification = () => {
  const [activeTab, setActiveTab] = useState('phone');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [timeLeft, setTimeLeft] = useState(40);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    phone: '',
    email: '',
    otp: ''
  });

  useEffect(() => {
    let timer;
    if (otpSent && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [otpSent, timeLeft]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  const validateOTP = (otp) => {
    return otp.length === 4 && /^\d+$/.test(otp);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setErrors({ phone: '', email: '', otp: '' });
  };

  const handleGetCode = () => {
    if (activeTab === 'phone') {
      if (!phone) {
        setErrors({ ...errors, phone: 'Phone number is required' });
        return;
      }
      if (!validatePhone(phone)) {
        setErrors({ ...errors, phone: 'Please enter a valid 10-digit phone number' });
        return;
      }
    } else {
      if (!email) {
        setErrors({ ...errors, email: 'Email is required' });
        return;
      }
      if (!validateEmail(email)) {
        setErrors({ ...errors, email: 'Please enter a valid email address' });
        return;
      }
    }

    setLoading(true);
    setTimeout(() => {
      setOtpSent(true);
      setTimeLeft(40);
      setLoading(false);
      console.log(`OTP sent to ${activeTab === 'phone' ? `${countryCode}${phone}` : email}`);
    }, 1000);
  };

  const handleResendCode = () => {
    setLoading(true);
    setTimeout(() => {
      setTimeLeft(40);
      setLoading(false);
      console.log(`OTP resent to ${activeTab === 'phone' ? `${countryCode}${phone}` : email}`);
    }, 1000);
  };

  const handleVerify = () => {
    if (!validateOTP(otp)) {
      setErrors({ ...errors, otp: 'Please enter a valid 4-digit code' });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log({
        method: activeTab,
        phone: activeTab === 'phone' ? `${countryCode}${phone}` : null,
        email: activeTab === 'email' ? email : null,
        otp: otp
      });
      alert('Verification successful!');
    }, 1000);
  };

  const handleChangeContact = () => {
    setOtpSent(false);
    setOtp('');
    setErrors({ phone: '', email: '', otp: '' });
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      p: 2,
      backgroundColor: '#f5f5f5'
    }}>
      <Box sx={{
        maxWidth: 480,
        width: '100%',
        bgcolor: 'background.paper',
        borderRadius: 3,
        boxShadow: 3,
        p: 4,
        textAlign: 'center'
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <LockOutlinedIcon sx={{ fontSize: 40, color: 'rgb(28, 35, 169)' }} />
        </Box>

        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
          OTP Verification
        </Typography>

        {!otpSent ? (
          <>
            <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
              Enter your {activeTab} to receive a verification code.
            </Typography>

            <Box sx={{ 
              display: 'flex',
              justifyContent: 'center',
              mb: 3,
              p: 1,
              borderRadius: 2
            }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                variant="fullWidth"
                sx={{
                  '& .MuiTabs-flexContainer': {
                    gap: '8px',
                  },
                  '& .MuiTabs-indicator': {
                    display: 'none',
                  },
                }}
              >
                <StyledTab label="Phone" value="phone" selected={activeTab === 'phone'} />
                <StyledTab label="Email" value="email" selected={activeTab === 'email'} />
              </Tabs>
            </Box>

            {activeTab === 'phone' ? (
              <>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1, textAlign: 'left' }}>
                    Phone number
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={4}>
                      <Select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        fullWidth
                        sx={{ height: '56px' }}
                      >
                        {countries.map((country) => (
                          <MenuItem key={country.code} value={country.code}>
                            {country.code}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                    <Grid item xs={8}>
                      <StyledOutlinedInput
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value.replace(/\D/g, ''));
                          setErrors({ ...errors, phone: '' });
                        }}
                        fullWidth
                        error={!!errors.phone}
                      />
                    </Grid>
                  </Grid>
                  {errors.phone && (
                    <Typography color="error" variant="caption" sx={{ textAlign: 'left' }}>
                      {errors.phone}
                    </Typography>
                  )}
                </FormControl>
              </>
            ) : (
              <>
                <Typography variant="subtitle2" sx={{ mb: 1, textAlign: 'left' }}>
                  Email
                </Typography>
                <StyledOutlinedInput
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({ ...errors, email: '' });
                  }}
                  fullWidth
                  sx={{ mb: 2 }}
                  error={!!errors.email}
                />
                {errors.email && (
                  <Typography color="error" variant="caption" sx={{ textAlign: 'left' }}>
                    {errors.email}
                  </Typography>
                )}
              </>
            )}

            <GradientButton
              fullWidth
              onClick={handleGetCode}
              disabled={loading}
              sx={{
                color: 'white !important',
                '& .MuiCircularProgress-root': {
                  color: 'white !important'
                }
              }}
            >
              {loading ? <CircularProgress size={24} /> : 'Get code'}
            </GradientButton>
          </>
        ) : (
          <>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Enter OTP code
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ mb: 1 }}>
              Enter the 4-digit code sent to {activeTab === 'phone' ? (
                <>
                  {countryCode}{phone}
                  <Button
                    variant="text"
                    size="small"
                    onClick={handleChangeContact}
                    sx={{ ml: 1, textTransform: 'none', color: 'rgb(28, 35, 169)' }}
                  >
                    Change number
                  </Button>
                </>
              ) : (
                <>
                  {email}
                  <Button
                    variant="text"
                    size="small"
                    onClick={handleChangeContact}
                    sx={{ ml: 1, textTransform: 'none', color: 'rgb(28, 35, 169)' }}
                  >
                    Change email
                  </Button>
                </>
              )}
            </Typography>

            <ExpiryTimer>
              <Typography variant="body2">
                Code expires in: {Math.floor(timeLeft / 10)}{timeLeft % 10}
              </Typography>
            </ExpiryTimer>

            <Grid container spacing={2} justifyContent="center" sx={{ mb: 3 }}>
              {[0, 1, 2, 3].map((index) => (
                <Grid item key={index}>
                  <OTPInput
                    value={otp[index] || ''}
                    onChange={(e) => {
                      const newOtp = otp.split('');
                      newOtp[index] = e.target.value.replace(/\D/g, '');
                      setOtp(newOtp.join('').slice(0, 4));
                      setErrors({ ...errors, otp: '' });
                    }}
                    inputProps={{ maxLength: 1 }}
                    error={!!errors.otp}
                  />
                </Grid>
              ))}
            </Grid>
            {errors.otp && (
              <Typography color="error" variant="caption" sx={{ display: 'block', textAlign: 'center', mb: 2 }}>
                {errors.otp}
              </Typography>
            )}

            <GradientButton
              fullWidth
              onClick={handleVerify}
              disabled={loading}
              sx={{
                color: 'white !important',
                '& .MuiCircularProgress-root': {
                  color: 'white !important'
                }
              }}
            >
              {loading ? <CircularProgress size={24} /> : 'Verify'}
            </GradientButton>

            <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
              Didn't receive the {activeTab === 'phone' ? 'SMS' : 'email'}?{' '}
              <Button
                variant="text"
                size="small"
                onClick={timeLeft === 0 ? handleResendCode : null}
                disabled={timeLeft > 0 || loading}
                sx={{ textTransform: 'none', color: 'rgb(28, 35, 169)' }}
              >
                Resend code {timeLeft > 0 && `(${timeLeft}s)`}
              </Button>
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default OTPVerification;