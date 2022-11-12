import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { useMemo } from 'react';
import { palette, gradients } from './palette';
import { typography } from './typography';
import GlobalStyles from './GlobalStyles';

declare module '@mui/material/styles' {
  interface Theme {
    gradients: {
      main: string;
    };
  }

  interface ThemeOptions {
    gradients: {
      main: string;
    };
  }
}

type ThemeConfigProps = {
  children: React.ReactNode;
};

const ThemeConfig = ({ children }: ThemeConfigProps) => {
  const themeOptions = useMemo(
    () => ({
      typography,
      palette,
      gradients,
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default ThemeConfig;
