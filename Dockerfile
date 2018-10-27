FROM node:10

COPY ./ /app


WORKDIR /app

ENTRYPOINT [ "node", "App.js" ]