const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
var sass = require('node-sass-middleware');
const path = require('path');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.use(sass({
  src:'./sass',
  dest:'./public/css',
  outputStyle:'compressed',
  prefix:'/css',
  indentedSyntax: false, // sass:true, scss:false
  debug: true
}));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
