FROM node:14.16.1-alpine

#RUN apk update & install python
RUN apk update 

# Create app directory
RUN mkdir -p /usr/src/app

#change working DIR
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app

RUN npm install
# Bundle app source
COPY . /usr/src/app


#Install new dependencies
RUN npm update
#open ports
EXPOSE 8080
#set ENV

CMD ["node", "index.js"]