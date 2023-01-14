import { Styles } from '@/types/styles';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { lighten, Stack } from '@mui/material';
import CustomIconButton from '../icon-button';

const iconButtonStyles: Styles = {
  backgroundColor: ({ palette }) => lighten(palette.text.secondary, 0.9),
};

const PageNavigationControls = () => {
  return (
    <Stack direction="row" gap="10px" alignItems="center">
      <CustomIconButton
        tooltipText="Previous Page"
        icon={<NavigateBefore />}
        IconButtonProps={{
          sx: iconButtonStyles,
        }}
      />
      <CustomIconButton
        tooltipText="Next Page"
        icon={<NavigateNext />}
        IconButtonProps={{
          sx: iconButtonStyles,
        }}
      />
    </Stack>
  );
};

export default PageNavigationControls;
