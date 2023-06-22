
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
interface ThemeProps {
    children: ReactNode;
  }
const theme = createTheme({
    palette: {
        primary: {
          main: '#444791',
        },
        secondary: {
          main: '#dc004e',
        },
      },
      typography: {
        fontFamily: 'Segoe UI',
      },
});

const Theme: React.FC<ThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
