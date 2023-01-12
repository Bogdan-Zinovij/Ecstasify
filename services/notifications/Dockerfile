# stage 1

FROM node:16-alpine3.14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . . 

RUN npm run build

# stage 2

FROM node:16-alpine3.14

RUN apk add --no-cache tini

ENTRYPOINT ["/sbin/tini", "--"]

WORKDIR /app

COPY --from=build /app/*.env /app/package*.json ./

RUN npm ci --production

COPY --from=build /app/dist ./src/

CMD ["node", "./src/main.js"]
  