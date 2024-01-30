# Use an official Node runtime as the base image
FROM node:16

# Set the working directory in the container to /backend
WORKDIR /backend

# Copy package.json and package-lock.json into the container at /backend
COPY package*.json ./

# Install any necessary dependencies
RUN npm install

# Bundle app source inside the Docker image
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define the command to run your app
CMD ["node", "index.js"]
