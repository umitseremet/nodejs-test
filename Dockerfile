#FROM node:10
FROM ECR-ACCOUNT-ID.dkr.ecr.us-east-1.amazonaws.com/node:10

COPY . .
RUN npm install

EXPOSE 3000
CMD [ "node", "app.js" ]
