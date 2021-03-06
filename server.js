const express =require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();



app.use(cors())
app.use(express.json());

const newsController = require('./controllers/booth.js');
app.use('/booth', newsController);

app.listen(3003, ()=> {
  console.log('listening...');
});
mongoose.connect(
  'mongodb://localhost:27017/boothback',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
)
mongoose.connection.once('open', () => {
  console.log('connected to mongod');
})
