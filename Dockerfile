<<<<<<< HEAD
FROM launcher.gcr.io/google/nodejs


RUN npm install
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
=======
# Dockerfile extending the generic Node image with application files for a
# single application.
FROM gcr.io/google_appengine/nodejs
COPY . /app/
# You have to specify "--unsafe-perm" with npm install
# when running as root.  Failing to do this can cause
# install to appear to succeed even if a preinstall
# script fails, and may have other adverse consequences
# as well.
# This command will also cat the npm-debug.log file after the
# build, if it exists.
RUN npm install --unsafe-perm || \
  ((if [ -f npm-debug.log ]; then \
      cat npm-debug.log; \
    fi) && false)
CMD npm start
>>>>>>> 5cc93240bfbfd8b900e468682a5083597f0991dc
