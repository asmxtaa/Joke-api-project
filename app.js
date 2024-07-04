const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const jokeRouter = require('./routes/joke');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/joke', jokeRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
