# Use Node 14 LTS as the base image
FROM node:14

# Set working directory
WORKDIR /app

# Install dependencies first for better caching
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the Angular app
RUN npm run build -- --prod

# Expose the dev server port
EXPOSE 4200

# Default command runs the dev server accessible outside the container
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "4200"]
