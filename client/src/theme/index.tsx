import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { useMemo } from 'react';
import { palette } from './palette';
import { typography } from './typography';
import GlobalStyles from './GlobalStyles';

type ThemeConfigProps = {
  children: React.ReactNode;
};

const ThemeConfig = ({ children }: ThemeConfigProps) => {
  const themeOptions = useMemo(
    () => ({
      typography,
      palette,
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
