CREATE TABLE IF NOT EXISTS public."subscription-plans"
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    name character varying(32) COLLATE pg_catalog."default" NOT NULL,
    price numeric(9,2) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL DEFAULT now(),
    "updatedAt" timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT "PK_738126eef4c9f1131679bcde9f4" PRIMARY KEY (id),
    CONSTRAINT "UQ_dead26a2a534532ab8ce2c5f335" UNIQUE (name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."subscription-plans"
    OWNER to postgres;