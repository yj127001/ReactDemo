FROM node:latest

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev"]

