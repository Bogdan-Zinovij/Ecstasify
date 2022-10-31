CREATE TABLE IF NOT EXISTS tracks
(
    id character varying(65) NOT NULL,
    name character varying(64) NOT NULL,
    author character varying(64) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);
