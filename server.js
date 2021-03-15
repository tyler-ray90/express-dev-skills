// Require Modules
const express = require("express");

const indexRouter = require("./routes/index");
const devskillsRouter = require("./routes/devskills");
const morgan = require('morgan');
const methodOverride = require('method-override');

// Create the Express App
const app = express();

// Configure the App (app.set)
// We'll use the ejs view engine
app.set("view engine", "ejs");

// Mount Middleware (app.use)
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));


// Mount Routes
app.use("/", indexRouter);
app.use('/devskills', devskillsRouter);

// Tell the App to Listen on Port 3000
app.listen(3000, function () {
	console.log("Express is listening on port 3000");
});
