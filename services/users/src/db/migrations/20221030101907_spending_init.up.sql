CREATE TABLE IF NOT EXISTS users
(
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    role character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tokens
(
    "userId" uuid NOT NULL,
    "refreshToken" character varying(512) NOT NULL,
    CONSTRAINT tokens_pkey PRIMARY KEY ("userId"),
    CONSTRAINT "tokens_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);