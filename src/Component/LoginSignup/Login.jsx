import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { userLogin, userSignUp, postFbData } from "../../Config/firebase/firebasemethod";


const theme = createTheme();

export default function Login() {
  
  const [val, setval] = useState({});
    const [type, setType] = useState({});
    const [msg, setErrorMsg] = useState("");
    const [loader, setloader] = useState(false);
    let navigation = useNavigate();
 
    let loginUser = () => {
      setloader(true);
      userLogin(val)
        .then((res) => {
          setloader(false);
          navigation("/home");
        })
        .catch((err) => {
          setErrorMsg(err.message);
          console.log(err.message);
        });
    };
  
    let handleChange = (event) => {
      postFbData("UserType", type)
        .then((res) => {
          setType({ ...type, userType: event.target.value });
          console.log("userType: " , event.target.value);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
  
  
    useEffect(() => {}, []);
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form"   noValidate sx={{ mt: 1 }}>

          <TextField
             onChange={(e) => setval({ ...val, email: e.target.value })}
               margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
          <TextField
               onChange={(e) => setval({ ...val, password: e.target.value })}
               margin="normal"
               required
               fullWidth
               name="password"
               label="Password"
               type="password"
               id="password"
               autoComplete="current-password"
            />                      
            <Button            
              onClick={loginUser} loading={loader}  type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }} >
              Sign In
            </Button>

            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Container>
    </ThemeProvider>
  );
}
