const express = require('express');
const cors = require('cors');
const app = express();

const router = require('./router');
require('./database')



app.use(cors());
app.use(express.json());

app.use(router);

app.get('/', (resquest, response) =>{
  response.json({
    messege: 'API Server Running 💻'
  });
});

app.listen(3333, () => {
  console.log('Server is running 🏃🏽‍♂️💨');
});
