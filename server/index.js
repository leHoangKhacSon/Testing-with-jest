const express = require('express');
const cors = require('cors');
const dotevn = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// config enviroment varaible
dotevn.config();
// connect to database
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

const app = express();
const port = process.env.PORT;

// require router
const loginRouter = require('./api/routes/user.route');
const bookRouter = require('./api/routes/book.route');

// require middleware
const middleware = require('./middlewares/token.middleware');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.options('*', cors()); // Pass all cors
app.use(cors({
    exposedHeaders: '*'
}));

app.get('/', function (req, res) {
  res.status(200).send('Hello World!')
})

app.use('/api/user', loginRouter);
app.use('/api/books', middleware.checkToken, middleware.protectedRoute, bookRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;