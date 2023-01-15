import Router from '../router';
import * as s from './styles';
import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';

const App = () => {
  return (
    <Box sx={s.appWrapper}>
      <Router />
    </Box>
  );
};

export default observer(App);
