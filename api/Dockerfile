FROM debian:buster
WORKDIR /src
COPY package.json ./
RUN apt-get -yq update && apt-get -yq install nodejs npm && npm i -g yarn && yarn install
COPY . .
EXPOSE 8080
CMD ["yarn", "start"]
