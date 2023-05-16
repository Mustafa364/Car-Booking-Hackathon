import React, { useState } from 'react';
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
import { userSignUp } from "../../Config/firebase/firebasemethod";
import { useNavigate } from 'react-router-dom';
 

const theme = createTheme();

export default function SignUp() {
  let navigation = useNavigate();

    const [val, setval] = useState({});
  
  
    let signUpUser = () => {
      
      userSignUp(val)
        .then((res) => { 
         
          navigation("/");
          
        })
        .catch((err) => {
        
          console.log(err.message)
        });
    };
  
  

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
            Sign up
          </Typography>
          <Box component="form" noValidate   sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  onChange={(e) => setval({ ...val, userName: e.target.value })}
                 variant="standard"
                 label="Name"
                 required
                  fullWidth
                  id="name"

                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                 onChange={(e) => setval({ ...val, email: e.target.value })}
                 variant="standard"
                 label="Email"
                 required
                  fullWidth
                  id="email"

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={(e) => setval({ ...val, password: e.target.value })}
                 variant="standard"
                 label="Password"
                 required
                 fullWidth
                 id="password"
                 type="password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              
              onClick={signUpUser}
               variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
         
      </Container>
    </ThemeProvider>
  );
}
