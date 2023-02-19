# Dockerfile for React client

# Build react client
FROM node:17-alpine
RUN apk add chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
# Working directory be app
WORKDIR /frontend
COPY package*.json .
RUN npm install
COPY . . 
EXPOSE 3000
CMD ["npm","start"]




