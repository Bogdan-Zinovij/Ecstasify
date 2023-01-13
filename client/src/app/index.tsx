import Router from '../router';
import * as S from './styles';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box sx={S.AppWrapper}>
      <Router />
    </Box>
  );
};

export default App;
