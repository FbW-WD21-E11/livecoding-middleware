import express from 'express';

import teaRoutes from './routes/teaRoutes.js';
import userRoutes from './routes/userRoutes.js';


const app = express();
//convert json in body of http to a object (this is middleware)
app.use(express.json());

//use the tearouter module for /tea
app.use('/tea', teaRoutes);
//userrouter module for /user
app.use('/user', userRoutes);

//listening for requests on port 3000
app.listen(3000, ()=> {
   console.log("the server is listening for requests.");
});