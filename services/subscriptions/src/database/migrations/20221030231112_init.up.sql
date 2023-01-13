CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS "subscription-plans"
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    name character varying(32) NOT NULL,
    price numeric(9,2) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL DEFAULT now(),
    "updatedAt" timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT "PK_738126eef4c9f1131679bcde9f4" PRIMARY KEY (id),
    CONSTRAINT "UQ_dead26a2a534532ab8ce2c5f335" UNIQUE (name)
);

CREATE TABLE IF NOT EXISTS features
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    name character varying(256) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL DEFAULT now(),
    "updatedAt" timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT "PK_5c1e336df2f4a7051e5bf08a941" PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS "subscription-features"
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    value numeric(9,2) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL DEFAULT now(),
    "updatedAt" timestamp with time zone NOT NULL DEFAULT now(),
    "subscriptionPlanId" uuid NOT NULL,
    "featureId" uuid NOT NULL,
    CONSTRAINT "PK_3185f0f69aceecf85c9758bb4b6" PRIMARY KEY (id),
    CONSTRAINT "FK_599d2408d71658e3159307ee88b" FOREIGN KEY ("featureId")
        REFERENCES features (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT "FK_e5bb00166ffc5e1f022430f6657" FOREIGN KEY ("subscriptionPlanId")
        REFERENCES "subscription-plans" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);