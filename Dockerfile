FROM node:18.2.0

WORKDIR /app

COPY ./ ./

run npm install

CMD ["node", "index.js"]