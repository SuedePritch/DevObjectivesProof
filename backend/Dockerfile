# Dockerfile for Node backend

FROM node:17-alpine
# Working directory be app
WORKDIR /backend
COPY package*.json .
RUN npm install
COPY . . 
EXPOSE 8080
CMD ["node","server.js"]




