# FROM alpine
# COPY quickstart.sh /
# CMD ["/quickstart.sh"]


# RUN npm install
# RUN npm run build

# Base image
FROM node:alpine
# Create app directory
RUN mkdir -p /app
WORKDIR /app
# Install app dependencies
COPY package.json /app/package.json
RUN npm install --production
EXPOSE 8080
CMD npm  start
