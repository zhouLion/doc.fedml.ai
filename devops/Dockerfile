# Use a second stage to create a smaller image without build dependencies
FROM node:18-alpine

WORKDIR /app

#  Copy package files and install dependencies
COPY package-lock.json package.json ./

RUN npm install

# Copy app source code and build for production
COPY . .

RUN npm run build

# Expose the port and switch to non-root user
EXPOSE 3000
USER node

CMD ["npm","run","serve"]
