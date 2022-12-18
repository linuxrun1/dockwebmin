FROM node:14
WORKDIR /src
COPY package.json ./
RUN yarn install
COPY . .
EXPOSE 8080
CMD ["yarn", "start"]
