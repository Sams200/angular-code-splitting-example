FROM node:lts-alpine AS build

WORKDIR /src
COPY package*.json ./
RUN npm ci
COPY . ./

RUN npm run build

FROM nginx:stable-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /src/dist/angular-code-splitting-example/browser /usr/share/nginx/html
EXPOSE 80
