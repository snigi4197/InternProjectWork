#FROM node:7
#WORKDIR /node_eg
#COPY package.json /node_eg
#RUN npm install
#RUN npm install -g nodemon 
#COPY . /node_eg
#EXPOSE 9000
#CMD nodemon index.js
FROM node:9
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
RUN npm install -g nodemon 
COPY . /usr/src/app
EXPOSE 3000
CMD nodemon index.js