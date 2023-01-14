import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import { CheckCircleOutline, CheckCircle } from '@mui/icons-material';
import { SubscriptionFeature as SubscriptionFeatureType } from '@/models/subscription';

const SubscriptionFeature = ({ text }: { text: string }) => {
  return (
    <Stack direction="row" gap={1.5}>
      <CheckCircleOutline color="primary" /> {text}
    </Stack>
  );
};

type SubscriptionPlanCardProps = {
  isActive?: boolean;
  name: string;
  price: string;
  features: SubscriptionFeatureType[];
};

const SubscriptionPlanCard = ({
  isActive,
  name,
  price,
  features,
}: SubscriptionPlanCardProps) => {
  return (
    <Card
      elevation={0}
      sx={{
        border: ({ palette }) =>
          `${isActive ? '3px' : '1px'} solid ${
            isActive ? palette.primary.main : palette.divider
          }`,
        borderRadius: '10px',
        padding: '15px',
      }}
    >
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            fontWeight={600}
          >
            {name}
          </Typography>
          {isActive ? <CheckCircle color="primary" /> : null}
        </Stack>
        <Typography variant="h4" fontWeight={700}>
          ${price}/mth
        </Typography>
        <Typography
          marginBottom={2}
          gutterBottom
          variant="body2"
          color="text.secondary"
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Stack>
          <Stack gap={1}>
            {features.map(({ feature }) => {
              return (
                <SubscriptionFeature key={feature.id} text={feature.name} />
              );
            })}
          </Stack>
        </Stack>
      </CardContent>
      {!isActive ? (
        <CardActions>
          <Button disableElevation fullWidth variant="contained">
            Change Plan
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
};

export default SubscriptionPlanCard;
