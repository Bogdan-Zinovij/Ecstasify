CREATE TABLE IF NOT EXISTS "subscription-plans"
(
    id character varying(64) NOT NULL,
    name character varying(32) NOT NULL,
    price numeric(9,2) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL DEFAULT now(),
    "updatedAt" timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT "PK_738126eef4c9f1131679bcde9f4" PRIMARY KEY (id),
    CONSTRAINT "UQ_dead26a2a534532ab8ce2c5f335" UNIQUE (name)
);