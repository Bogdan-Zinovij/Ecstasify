CREATE TABLE IF NOT EXISTS playlists
(
    id uuid NOT NULL,
    name character varying(64) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT playlists_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS playlistTracks
(
    id uuid NOT NULL,
    playlistId uuid NOT NULL,
    trackId uuid NOT NULL,
    CONSTRAINT playlistTracks_pkey PRIMARY KEY (id)
);
