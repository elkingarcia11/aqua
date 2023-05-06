FROM node:alpine as build-stage

WORKDIR /app

COPY package*.json ./
COPY next.config.js ./
COPY ./ ./

RUN npm install
RUN npm run build --omit=dev

EXPOSE 3000

ENV PORT 3000

EXPOSE 3000
CMD ["npm", "start"]