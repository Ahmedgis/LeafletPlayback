# build stage
FROM node:16.17.0-alpine3.16 as build-stage
WORKDIR /apps/LeafletPlayback
COPY . .
#RUN npm install
#RUN npm run build-production

# production stage
FROM nginx:alpine
COPY --from=build-stage /apps/LeafletPlayback /usr/share/nginx/html
