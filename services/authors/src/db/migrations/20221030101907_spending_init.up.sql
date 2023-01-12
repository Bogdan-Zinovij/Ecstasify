CREATE TABLE IF NOT EXISTS authors
(
    id uuid NOT NULL,
    name character varying(64) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT authors_pkey PRIMARY KEY (id)
)