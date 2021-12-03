require('dotenv').config();
const express = require('express')
const app = express();
const tasks = require('./routes/tasks');           
const port = process.env.PORT || 3000;
const connectDB = require('./db/conn')
const notFound = require('./middleware/not-found')


// middlewere
app.use(express.static('./public'))
app.use(express.json())


//routes
app.use("/api/v1/tasks",tasks)

app.use(notFound)


const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI)
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();
