const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars'); // Correct way to import express-handlebars
const app = express();
const port = 3000;

app.engine('handlebars', engine()); // Use engine() to create instance
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views')); // Optional: specify views folder

app.use(express.static(path.join(__dirname, 'static')));


app.use('/', require(path.join(__dirname, 'routes/blog.js')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
