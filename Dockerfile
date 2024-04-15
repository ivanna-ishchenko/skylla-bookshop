FROM node:16 as client-builder

WORKDIR /app

COPY client/package.json client/yarn.lock ./client/
RUN cd client && yarn install

COPY client/ ./client/
COPY shared ./shared 

RUN cd client && yarn build

FROM node:16 as server-builder

WORKDIR /app

COPY shared ./shared 

COPY --from=client-builder /app/client/build /app/client/build

WORKDIR /app/server

COPY server/package.json server/yarn.lock ./
RUN yarn install

COPY server/tsconfig.json ./
COPY server/src ./src

RUN npx tsc --pretty

EXPOSE 3000

CMD ["node", "dist/server/src/index.js"]

ENV CLIENT_BUILD_PATH=/app/client/build
