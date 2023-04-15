
FROM node:lts-alpine

 
# make the 'app' folder the current working directory
WORKDIR /frontend

 
# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

 
# install project dependencies
# RUN rm -rf node_modules/
RUN npm install --force

 
# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .
<<<<<<< Updated upstream

# build app for production with minification

EXPOSE 8080
CMD [ "npm", "run", "serve" ]
=======
>>>>>>> Stashed changes
