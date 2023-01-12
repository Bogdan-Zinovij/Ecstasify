import SectionHeader from '@/components/section-header';
import { useStore } from '@/hooks';
import { Box, LinearProgress } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import PremiumPlans from './premium-plans';

const SubscriptionsPage = () => {
  const { subscriptions, getSubscriptions, getSubscriptionsLoading } =
    useStore('subscriptionsStore');

  useEffect(() => {
    getSubscriptions();
  }, []);

  if (getSubscriptionsLoading && !subscriptions) {
    return (
      <LinearProgress
        sx={{ position: 'absolute', top: 0, left: 0, width: '100%' }}
      />
    );
  }

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <SectionHeader
        title="Subscriptions"
        description="List of available subscription plans."
      />
      {subscriptions && subscriptions.length > 0 ? (
        <PremiumPlans plans={subscriptions} />
      ) : null}
    </Box>
  );
};

export default observer(SubscriptionsPage);
