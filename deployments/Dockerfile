# Build React static files
FROM node:18.13.0-alpine as build

WORKDIR /app/front
COPY ./front/package.json ./
COPY ./front/package-lock.json ./
RUN npm install axios
RUN npm install sass
COPY ./front/ ./
RUN npm run build

# Nginx Start
FROM nginx:1.23-alpine

COPY deployments/nginx.conf /etc/nginx/conf.d/default.conf

RUN echo "load_module modules/ngx_http_image_filter_module.so;" >> /etc/nginx/nginx.conf

COPY --from=build /app/front/build /usr/share/nginx/html