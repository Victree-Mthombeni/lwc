
## Overview

This project consists of two main components: the frontend React application and the backend API.

### Frontend and Api

The `frontend` folder contains the React application responsible for the user interface. This is where you'll find all the client-side code, including components, styles, and assets.

To run the frontend application, navigate to the `frontend` folder and follow the instructions below:

Start both servers: npm start in the frontend folder and node server.js in the api folder


Once the server is running, the API endpoints will be accessible at the specified routes.

## MongoDB Setup

This project uses MongoDB to store data. Make sure you have MongoDB installed and running locally. You can download MongoDB from [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community).

## Storing SVG Images

To store SVG images in the database, use the `storeSVGImages.js` script provided in the `api` folder. This script reads SVG images from the `brands` folder and stores them as base64 in the MongoDB database.


