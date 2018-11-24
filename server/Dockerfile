FROM node:10.12.0-alpine

# Create app directory
WORKDIR /app

COPY ./ /app

RUN npm install

EXPOSE 3000

CMD [ "npm", 'run', 'start' ]