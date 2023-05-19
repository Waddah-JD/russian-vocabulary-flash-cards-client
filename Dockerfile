# build phase
FROM node:16 AS build
WORKDIR /app
COPY package.json yarn.lock ./
COPY . .
RUN yarn install
RUN yarn build:prod

# serve phasee
FROM nginx:1.21-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]