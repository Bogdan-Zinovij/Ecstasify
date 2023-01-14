# stage 1

FROM node:16.14.2-alpine3.14 AS build
 
WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .
 
RUN npm run build

# stage 2

FROM nginx:1.21.6-alpine

WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist ./