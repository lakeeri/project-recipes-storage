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
const favoriteProductsRouter = require('./routes/favoriteProductsRouter');
const shoppingListRouter = require('./routes/shoppingListRouter');
const pendingRecipesRouter = require('./routes/pendingRecipeRouter');
const cookedRecipeRouter = require('./routes/cookedRecipeRouter');
const mailerRouter = require('./routes/mailerRouter');
const middleRouter = require('./routes/middleRouter');
const virtualStorageRouter = require('./routes/virtualStorageRouter');

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
app.use('/api/favoriteProducts', favoriteProductsRouter);
app.use('/api/pendingRecipes', pendingRecipesRouter);
app.use('/api/cookedRecipes', cookedRecipeRouter);
app.use('/api/shoppingList', shoppingListRouter);
app.use('/api/middle', middleRouter);
app.use('/api/virtualstorage', virtualStorageRouter);
app.use('/api/mailer', mailerRouter);

app.listen(PORT);
