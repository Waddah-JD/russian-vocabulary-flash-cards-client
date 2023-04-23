# 1st stage: build client app 
FROM node AS builder
WORKDIR /app
COPY package.json yarn.lock .yarnrc.yml /app/
RUN yarn install
COPY . .
RUN yarn build:prod

# 2nd stage: serve content 
FROM nginx 
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]