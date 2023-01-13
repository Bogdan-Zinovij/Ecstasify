import { Subscription } from '@/models/subscription';
import { Stack } from '@mui/material';
import SubscriptionPlanCard from '../subscription-plan-card';

type PremiumPlansProps = {
  plans: Subscription[];
};

const PremiumPlans = ({ plans }: PremiumPlansProps) => {
  return (
    <Stack gap={3} alignItems={'stretch'} paddingBottom={4}>
      {plans.map(({ id, subscriptionFeatures, name, price }, i) => {
        return (
          <SubscriptionPlanCard
            key={id}
            isActive={i === 0 ? true : false}
            name={name}
            features={subscriptionFeatures}
            price={price}
          />
        );
      })}
    </Stack>
  );
};

export default PremiumPlans;
