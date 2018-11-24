FROM node:10.12.0-alpine

# Create app directory
WORKDIR /app

COPY ./ /app

RUN npm install

RUN npm run build

EXPOSE 8080
CMD [ "node", "server.js" ]