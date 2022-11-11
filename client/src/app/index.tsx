import Router from '../router';
import * as styles from './styles';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box sx={styles.AppWrapper}>
      <Router />
    </Box>
  );
};

export default App;
