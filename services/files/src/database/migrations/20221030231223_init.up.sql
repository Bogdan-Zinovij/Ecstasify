CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS files
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    "fileName" character varying(64) NOT NULL,
    "fileExt" character varying(64) NOT NULL,
    "fileNameWithExt" character varying(128) NOT NULL,
    "filePath" character varying(256) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL DEFAULT now(),
    "updatedAt" timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT "PK_6c16b9093a142e0e7613b04a3d9" PRIMARY KEY (id)
)