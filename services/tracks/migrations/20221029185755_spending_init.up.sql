CREATE TABLE IF NOT EXISTS tracks
(
    id uuid NOT NULL,
    name character varying(64) NOT NULL,
    author character varying(64) NOT NULL,
    genreId uuid,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);

CREATE TABLE IF NOT EXISTS genres
(
    id uuid NOT NULL,
    name character varying(255) NOT NULL
);
