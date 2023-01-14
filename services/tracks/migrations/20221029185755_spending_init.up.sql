CREATE TABLE IF NOT EXISTS genres
(
    id uuid NOT NULL,
    name character varying(64) NOT NULL,
    CONSTRAINT genres_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tracks
(
    id uuid NOT NULL,
    name character varying(64) NOT NULL,
    author character varying(64) NOT NULL,
    "genreId" uuid,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT tracks_pkey PRIMARY KEY (id),
    CONSTRAINT "tracks_genreId_fkey" FOREIGN KEY ("genreId")
        REFERENCES genres (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
);
