# build phase
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build:prod

# serve phasee
FROM nginx:1.21-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]