FROM node:18 AS base-image
WORKDIR /app
COPY package*.json /app/
COPY . .
RUN npm install
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=base-image /app .
EXPOSE 3000
ENTRYPOINT ["npm","start"]
