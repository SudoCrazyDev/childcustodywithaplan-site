# ─────────────────────────────────────────────
# Stage 1 — Build & optimise
# ─────────────────────────────────────────────
FROM node:20-alpine AS build

# sharp needs these native libs on Alpine
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    vips-dev \
    libc6-compat

WORKDIR /app

# Install deps first (layer-cached unless package files change)
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .

# astro build + node optimize-images.js (run automatically via the build script)
RUN npm run build

# ─────────────────────────────────────────────
# Stage 2 — Serve with nginx
# ─────────────────────────────────────────────
FROM nginx:alpine

# Copy the already-optimised static site
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx config with gzip + long-lived cache headers
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
