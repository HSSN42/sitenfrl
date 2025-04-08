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

# Copy built files and static assets
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./dist

# Install Express and Nodemailer
RUN npm install express nodemailer

# Copy server and environment files
COPY server.js ./
COPY .env ./

# Add build arguments for SMTP configuration
ARG SMTP_HOST
ARG SMTP_PORT
ARG SMTP_SECURE
ARG SMTP_USER
ARG SMTP_PASS
ARG SMTP_FROM

# Set environment variables
ENV SMTP_HOST=${SMTP_HOST}
ENV SMTP_PORT=${SMTP_PORT}
ENV SMTP_SECURE=${SMTP_SECURE}
ENV SMTP_USER=${SMTP_USER}
ENV SMTP_PASS=${SMTP_PASS}
ENV SMTP_FROM=${SMTP_FROM}

# Expose port
EXPOSE 80

# Start the server using npm start
CMD ["npm", "start"] 