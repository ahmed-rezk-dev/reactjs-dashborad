/* eslint consistent-return:0 import/order:0 */

/**
 * Module dependencies.
 */
const customLogger = require('./logger');
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const lusca = require('lusca');
const dotenv = require('dotenv');
const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const expressStatusMonitor = require('express-status-monitor');
const sass = require('node-sass-middleware');
const multer = require('multer');
const proxy = require('express-http-proxy');
const chokidar = require('chokidar');
/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: '.env' });

// React
// const argv = require('./argv');
// const port = require('./port');
// const setup = require('./middlewares-react/frontendMiddleware');

// const isDev = process.env.NODE_ENV !== 'production';
// const ngrok =
// 	(isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
// 		? require('ngrok')
// 		: false;
// const { resolve } = require('path');

const app = express();
// const server = require('http').Server(app);
const io = require('socket.io')();

const portIo = 8000;
io.listen(portIo);
io.on('connection', socket => {
	// console.log('socket', io);
	socket.emit('greet', { hello: 'Hey there browser!' });
	socket.on('respond', data => {
		console.log(data);
	});
	socket.on('disconnect', () => {
		console.log('Socket disconnected');
	});
});
/**
 * Connect to MongoDB.
 */
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', err => {
	console.error(err);
	console.log(
		'%s MongoDB connection error. Please make sure MongoDB is running.',
		chalk.red('✗')
	);
	process.exit();
});

/**
 * Express configuration.
 */
app.use(cors());
app.use(
	expressStatusMonitor({
		title: 'Express Statusddd', // Default title
		healthChecks: [
			{
				protocol: 'http',
				host: '192.168.1.3',
				port: '8000',
			},
			{
				protocol: 'http',
				host: '192.168.1.3',
				port: '8000',
			},
		],
	})
);
app.use(compression());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	session({
		resave: true,
		saveUninitialized: true,
		secret: process.env.SESSION_SECRET,
		cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
		store: new MongoStore({
			url: process.env.MONGODB_URI,
			autoReconnect: true,
		}),
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.disable('x-powered-by');
app.use((req, res, next) => {
	res.locals.user = req.user;
	next();
});
app.use(
	lusca.csrf({
		whitelist: ['/login'],
	})
);

// Add headers
app.use((req, res, next) => {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*');

	// Request methods you wish to allow
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	);

	// Request headers you wish to allow
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-Requested-With,content-type,Authorization,x-token,x-refresh-token'
	);

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares-react/frontendMiddleware');

const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
	(isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
		? require('ngrok')
		: false;
const { resolve } = require('path');

const pxhost = process.env.npm_config_pxhost || '127.0.0.1';
const pxport = process.env.npm_config_pxport || '3000';

console.log({ pxhost });
console.log({ pxport });

/**
 * Api Routes.
 */
const webRoutes = require('./routes/web');

app.use('/api', webRoutes);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
	outputPath: resolve(process.cwd(), 'build'),
	publicPath: '/',
});

// get the intended port number, use port 3000 if not provided
const port = argv.port || process.env.PORT || 3000;

// Proxy requests
app.use(
	'/api',
	proxy(`${pxhost}:${pxport}/`, {
		forwardPath(req, res) {
			return require('url').parse(req.url).path;
		},
	})
);

// Files Watcher
const watcher = chokidar.watch('.');
watcher.on('ready', () => {
	watcher.on('all', (event, path) => {
		console.log(event, path);
		Object.keys(require.cache).forEach(function(id) {
			if (/[\/\\]app[\/\\]/.test(id)) delete require.cache[id];
		});
	});
});

// Start your app.
app.listen(port, err => {
	if (err) {
		return customLogger.error(err.message);
	}

	// Connect to ngrok in dev mode
	if (ngrok) {
		ngrok.connect(port, (innerErr, url) => {
			if (innerErr) {
				return customLogger.error(innerErr);
			}

			customLogger.appStarted(port, url);
		});
	} else {
		customLogger.appStarted(port);
	}
});
