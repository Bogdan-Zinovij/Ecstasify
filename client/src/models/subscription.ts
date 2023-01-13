export interface Feature {
  createdAt: string;
  updatedAt: string;
  id: string;
  name: string;
}

export interface SubscriptionFeature {
  createdAt: string;
  updatedAt: string;
  id: string;
  value: string;
  feature: Feature;
}

export interface Subscription {
  createdAt: string;
  updatedAt: string;
  id: string;
  name: string;
  price: string;
  subscriptionFeatures: SubscriptionFeature[];
}
