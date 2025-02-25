FROM node:20-alpine AS build

WORKDIR /src
COPY ./src .
RUN rm -rf node_modules
RUN npm ci
RUN npm run build

FROM node:20-alpine 
WORKDIR /src

COPY --from=build /src/package.json /src/package.json
COPY --from=build /src/package-lock.json /src/package-lock.json
COPY --from=build /src/dist /src/dist

RUN npm ci --omit=dev

CMD ["npm", "start"]