const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const { ValidationError } = require('sequelize');

const { enviroment } = require('./config');
const isProduction = enviroment === 'production';

// initialize Express app
const app = express();
// connect morgan for loggins information
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
// connect all routes

if (!isProduction) {
    // enable cors only in development
    app.use(cors());
}

// helmet helps set a variety of headers to better secure your app
app.use(
    helmet.crossOriginEmbedderPolicy({
        policy: 'cross-origin'
    })
    );

    // set _csrf token and create req.csrfToken method
    app.use(
        csurf({
            cookie: {
                secure: isProduction,
                sameSite: isProduction && "Lax",
                // make token only http, therefore, unreadable by JavaScript
                httpOnly: true
            }
        })
        );

app.use(routes);

// error handling routes
app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
  });

// sequelize error handling
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }
  next(err);
});

// error formatter
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
      title: err.title || 'Server Error',
      message: err.message,
      errors: err.errors,
      stack: isProduction ? null : err.stack
    });
  });

        module.exports = app;
