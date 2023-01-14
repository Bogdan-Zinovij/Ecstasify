import Router from '../router';
import * as S from './styles';
import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';

const App = () => {
  return (
    <Box sx={S.AppWrapper}>
      <Router />
    </Box>
  );
};

export default observer(App);
