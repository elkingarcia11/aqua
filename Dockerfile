# Stage 1: Base image for installing dependencies and building the source code
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies and build the application
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  apk add --no-cache libc6-compat && \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Copy the rest of the application
COPY . .

# Uncomment the following line in case you want to disable telemetry during build.
ENV NEXT_TELEMETRY_DISABLED 1

# Build the Next.js application
RUN npm run build

# Stage 2: Creating the production image
FROM node:18-alpine AS runner
WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV production

# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

# Create system user and group for running the application
RUN addgroup --system --gid 1001 nodejs && \
  adduser --system --uid 1001 nextjs

# Copy only necessary files from the builder stage
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./.next/standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to the nextjs user
USER nextjs

# Expose port 80 for the application
EXPOSE 80
ENV PORT 80

# Command to start the application
CMD ["node", "server.js"]