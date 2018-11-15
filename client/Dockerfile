FROM node:10.12.0-alpine

# Create app directory
WORKDIR /app

RUN npm install -g nodemon

COPY ./ /app

RUN npm install

EXPOSE 8080
CMD [ "npm", "run", "dev" ]