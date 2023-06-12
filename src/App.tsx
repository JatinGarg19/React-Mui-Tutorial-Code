import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import MuiTypography from './components/MuiTypography';
// import MuiButton from './components/MuiButton';
// import MuiCard from './components/MuiCard';
// import MuiSnackbar from './components/MuiSnackbar';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { createTheme, colors, ThemeProvider } from '@mui/material';

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
          {/* <MuiTypography /> */}
          {/* <MuiButton /> */}
          {/* <MuiCard /> */}
          {/* <MuiSnackbar /> */}
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
