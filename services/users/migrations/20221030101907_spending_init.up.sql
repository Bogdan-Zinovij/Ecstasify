CREATE TABLE IF NOT EXISTS users
(
    id character varying(64) NOT NULL,
    name character varying(64) NOT NULL,
    password character varying(64) NOT NULL,
    email character varying(64) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id)
)