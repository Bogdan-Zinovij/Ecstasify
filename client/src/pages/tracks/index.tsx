import SectionHeader from '@/components/section-header';
import { Box, IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';

const TracksPage = () => {
  return (
    <>
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <SectionHeader
          title="Tracks"
          description="List of created tracks. You can manage them from here."
          extra={
            <IconButton color="secondary" size="large">
              <Add fontSize="medium" />
            </IconButton>
          }
        />
      </Box>
    </>
  );
};

export default TracksPage;
