FROM cypress/browsers:node-18.16.0-chrome-114.0.5735.133-1-ff-114.0.2-edge-114.0.1823.51-1

RUN apt-get update && \
    apt-get install -y xvfb xauth && \
    rm -rf /var/lib/apt/lists/*

ENV DISPLAY=:99

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD Xvfb :99 -screen 0 1024x768x24 && \
    xvfb-run --server-args='-screen 0 1024x768x24' npm start
