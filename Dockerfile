FROM node:latest
RUN apt-get update -y && \
    apt-get install -y xvfb chromium
ENV DISPLAY=:99.0
ENV CHROME_BIN=/usr/bin/chromium
