##
# Simple Dockerfile for the VlamNet PCs website.
#
# This image installs dependencies, builds the static site, and then starts
# the production preview server (`npm start`, which runs `vite preview`).
#
# It assumes that the `start` script in `package.json` points to `vite preview`,
# which serves the `dist/` directory on port 4173.
##

FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependency descriptors first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile || npm install

# Copy application source
COPY . .

# Build the site
RUN npm run build

# Expose the port used by `vite preview` (default 4173)
EXPOSE 4173

# Start the preview server (serves the built files)
CMD ["npm", "start"]