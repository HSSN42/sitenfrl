# Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install production dependencies
COPY package*.json ./
RUN npm install --production

# Copy built files and necessary runtime files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/app/api ./src/app/api
COPY .env ./

# Install only the necessary runtime dependencies
RUN npm install express nodemailer

# Create a simple Express server to serve static files and handle API routes
COPY server.js ./

# Expose port
EXPOSE 80

# Start the server
CMD ["node", "server.js"] 