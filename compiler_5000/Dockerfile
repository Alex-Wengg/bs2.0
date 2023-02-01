#  Dockerfile for Node Express Backend api (development)

FROM node:14.15.3-alpine3.12
RUN apk update || : && apk add python3

ARG NODE_ENV=development

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm install -f

# Copy app source code
COPY . .

# Exports
EXPOSE 5000


CMD ["npm","start"]