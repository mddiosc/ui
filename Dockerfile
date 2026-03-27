# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
RUN npm install -g pnpm@10.5.2

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source and build Storybook static site
COPY . .
RUN pnpm build-storybook

# Serve stage
FROM nginx:1.27-alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/app.conf

# Copy Storybook static build
COPY --from=builder /app/storybook-static /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
