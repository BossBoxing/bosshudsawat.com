# 1. Base image for building the Next.js app
FROM node:20-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and package-lock.json (or yarn.lock)
COPY package.json package-lock.json* ./

# 4. Install dependencies
RUN npm install --frozen-lockfile

# 5. Copy the rest of the application code
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Install only production dependencies
RUN npm ci --omit=dev

# 8. Production stage
FROM node:20-alpine AS runner

# 9. Set working directory
WORKDIR /app

# 10. Copy built app from builder stage
COPY --from=builder /app/.next .next
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/public public

# 11. Expose port
EXPOSE 3000

# 12. Set environment variable
ENV NODE_ENV=production

# 13. Start Next.js application
CMD ["npm", "start"]
