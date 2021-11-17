const express = require('express');
const app = express();
const path = require('path');

const indexRoute = require('./routes/index');

// settings
// app.set('port', 3000);
app.set('views', path.join(__dirname, '/views'))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


// middlewares


// routes
app.use(indexRoute);


// static files
app.use(express.static(path.join(__dirname, 'public')));

// listen the server
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}

function messagePort () {
    console.log(`app running on port ${port}`)
}

app.listen(port, messagePort());
// app.listen(app.get('port'), ()=>{
//     console.log('server on port', app.get('port'));
// });