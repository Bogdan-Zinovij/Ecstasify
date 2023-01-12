CREATE TABLE IF NOT EXISTS playlists
(
    id character varying(64) NOT NULL,
    name character varying(64) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT playlists_pkey PRIMARY KEY (id)
);
