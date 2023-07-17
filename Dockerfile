FROM node:latest

RUN mkdir -p /app/src

WORKDIR /app/src

COPY . .

RUN npm install --legacy-peer-deps

RUN npm run build

EXPOSE 4173

CMD [ "npm", "run", "preview"]

