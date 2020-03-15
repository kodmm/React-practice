FROM "node:13.8.0-alpine3.10"
# mount directory
WORKDIR /usr/src/app
RUN npm install --save prop-types
RUN npm install -g create-react-app
