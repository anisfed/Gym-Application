#Node image
FROM node:latest

# Create app directory
WORKDIR /usr/src/app

#install ionic CLI
RUN npm install -g @ionic/cli
# Install app dependencies
COPY . .


RUN npm install


CMD ["ionic", "serve", "--port=8100", "--address=0.0.0.0", "--disable-host-check"]
