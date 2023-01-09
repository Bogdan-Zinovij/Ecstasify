import { GlobalStyles as GlobalThemeStyles, useTheme } from '@mui/material';

const GlobalStyles = () => {
  const { typography } = useTheme();

  return (
    <GlobalThemeStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          '&::-webkit-scrollbar': {
            width: '4px',
            height: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '100px',
            backgroundClip: 'padding-box',
            backgroundColor: '#c2c2c2',
          },
        },
        html: {
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          width: '100%',
          height: '100%',
          fontWeight: typography.fontWeightRegular,
          fontFamily: typography.fontFamily,
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
      }}
    />
  );
};

export default GlobalStyles;
