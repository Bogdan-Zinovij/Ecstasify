import {
  Card,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import * as s from './styles';

type TrackPreviewProps = {
  isFavorite: boolean;
};

const TrackPreview = ({ isFavorite = true }: TrackPreviewProps) => {
  return (
    <Card elevation={0} sx={s.trackCard}>
      <CardMedia
        sx={s.trackImg}
        component="img"
        image="https://media.pitchfork.com/photos/623b686c6597466fa9d6e32d/master/w_1280%2Cc_limit/Harry-Styles-Harrys-House.jpeg"
      />
      <Box>
        <Typography
          lineHeight={1}
          fontWeight={600}
          component="div"
          variant="subtitle1"
        >
          As It Was
        </Typography>
        <Typography color="text.secondary" fontWeight={400} variant="body2">
          Harry Styles
        </Typography>
      </Box>
      <Tooltip title="Add To Favorites">
        <IconButton>
          {isFavorite ? (
            <Favorite sx={{ color: '#e74c3c' }} fontSize="small" />
          ) : (
            <FavoriteBorder fontSize="small" />
          )}
        </IconButton>
      </Tooltip>
    </Card>
  );
};

export default TrackPreview;
