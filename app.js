const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/node_modules', express.static(__dirname, 'node_modules'))
app.listen(port, () => { console.log('running') })