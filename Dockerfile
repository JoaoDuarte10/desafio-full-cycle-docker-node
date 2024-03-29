FROM node:20.10.0

WORKDIR /usr/src/app

COPY . .

RUN npm i

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update && apt-get install -y wget

RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

EXPOSE 3000

CMD [ "npm", "run", "start" ]