const express = require('express');
const path = require('path');

const indexRoute = require('./routes/index.js');
const usersRoute = require('./routes/users.js')

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(indexRoute);
app.use(usersRoute);

app.listen(3000);