FROM node:8.16.0-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json .npmrc package-lock.json* ./
RUN npm install && npm cache clean --force

COPY . .

EXPOSE 3000
