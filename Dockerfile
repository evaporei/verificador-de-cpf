FROM node:8.16.0-alpine

RUN mkdir -p /usr/app/static && cd /usr/app

WORKDIR /usr/app

COPY package.json .npmrc package-lock.json ./
RUN npm install

COPY static/package.json static/.npmrc static/.env static/package-lock.json ./static/
RUN cd static && npm install && cd ..

COPY . .

RUN cd static && npm run build && cd ..

EXPOSE 3000
