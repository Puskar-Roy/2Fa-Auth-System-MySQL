FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

echo Hello

EXPOSE 5050

ENV PORT=5050
ENV MYSQL_HOST=localhost
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=<YOUR-PASSWORD>
ENV MYSQL_DATABASE=<YOUR-DATABASE>
ENV JWT_SECRET="ourjwtsecretrandomstring"
ENV JWT_COOKIE_EXPIRES_IN="3d"
ENV DEV_MODE=DEV 
ENV BACKENDURL=http://localhost:5050
ENV EMAIL=<YOUR-EMAIL>
ENV PASSWORD=<YOUR-PASSWORD> 


CMD ["npm", "start"]
