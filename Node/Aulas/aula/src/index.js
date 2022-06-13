import express from "express";
import routes from './routes.js';
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse.aaox4.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.listen(80, () => {
    console.log('Local: http://localhost:80');
});