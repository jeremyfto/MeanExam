const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose');
// loads in the mongoose config and connection to db
require('./server/config/routes')(app);
// loads the routes and sends the express instances to the function

// or 
// const routes = require('./server/config/routes');
// routes(app);

app.listen(1337, ()=>{
  console.log('listening on port 1337');
})
