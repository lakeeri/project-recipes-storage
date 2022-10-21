const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const userRouter = require('./routes/userRouter');
const recipesRouter = require('./routes/recipesRouter');
const productsRouter = require('./routes/productsRouter');
const storageRouter = require('./routes/storageRouter');
const oneProductRouter = require('./routes/oneProductRouter');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  name: 'sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
}));

app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

app.use('/api/user', userRouter);
app.use('/api/recipes', recipesRouter);
app.use('/api/products', productsRouter);
app.use('/api/storage', storageRouter);
app.use('/api/oneProduct', oneProductRouter);

app.listen(PORT);
