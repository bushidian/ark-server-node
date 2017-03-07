FROM node:latest

MAINTAINER Bushidian

COPY . /var/www

WORKDIR /var/www

RUN npm install

RUN npm install nodemon -g

EXPOSE 5005

ENTRYPOINT ["nodemon", "server.js"]


