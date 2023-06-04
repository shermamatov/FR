# Build React static files
FROM node:16.20.0-alpine3.18 as build

WORKDIR /app/front
COPY ./front/package.json ./
COPY ./front/package-lock.json ./
RUN npm install axios
RUN npm install sass
COPY ./front/ ./
RUN npm install next

# Nginx Start
FROM nginx:1.23-alpine

COPY deployments/default.conf /etc/nginx/conf.d/default.conf
COPY deployments/default.conf /etc/nginx/conf.d/default.conf
COPY deployments/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/front/build /usr/share/nginx/html