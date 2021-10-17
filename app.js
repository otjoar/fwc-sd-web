const express = require('express');
const logger = require('morgan');
const path = require('path');

const port = 8000;

let app = express();

/**
 * Set up middlewares
 */
app.use(logger('dev'));
app.use(express.json());

/**
 * Set up React static assets to be served at '/'
 */
app.use(express.static(path.join(__dirname, 'FrontEnd/build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'FrontEnd/build', 'index.html'));
});

/**
 * 404 Handler
 */
app.use((req, res, next) => {
    next(createError(404));
});

app.listen(process.env.PORT || port , () => {
    console.log(`Listening at port ${port}`);
})