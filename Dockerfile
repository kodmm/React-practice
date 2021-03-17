FROM "node:14.15.0-alpine3.10"
# mount directory
WORKDIR /usr/src/app
RUN npm install -g npm
RUN npm install -g yarn
RUN npm install --save prop-types
RUN npm install -g create-react-app
RUN npm install -g typescript
RUN npm i -D @types/react @types/react-dom
