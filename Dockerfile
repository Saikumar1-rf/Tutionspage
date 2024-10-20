# FROM node:alpine
# WORKDIR '/app'

# COPY package.json .
# RUN npm install
# COPY . .
# CMD ["npm","start"];

# Use the official Node.js image as the base image
FROM node:alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package*.json ./
# COPY yarn.lock ./

# Install dependencies
# RUN yarn install

# Copy the rest of your application code
COPY . .

# Build the React application
RUN install build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
