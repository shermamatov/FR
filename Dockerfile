# Build React static files
FROM node:18.13.0-alpine as build

WORKDIR /app/front
COPY ./front/package.json ./
COPY ./front/package-lock.json ./
RUN npm install axios
COPY ./front/ ./
RUN npm run build

# Django Start
FROM python:3.9.16-alpine

WORKDIR /usr/src/app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip

COPY ./ .
COPY --from=build /app/front/build ./front/build

RUN pip install -r requirements.txt
RUN python3 manage.py makemigrations
RUN python3 manage.py migrate

CMD ["/bin/sh", "-c", "python manage.py runserver 0.0.0.0:8000"]
