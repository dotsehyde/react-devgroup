import path from 'path';
import express from 'express';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App'
const app = express()

app.use('^/$', (req, res, next) => {
	fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
		if (err) {
			return res.status(500).send("Internal Server Error")
		}
		return res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`))
	})
})
app.use(express.static(path.resolve(__dirname, "..", "build")))

//API routes
const router = express.Router();
router.get('/hello', (req, res) => {
	return res.json({ message: 'Hello from server!' });
})
app.use('/api', router);
app.listen(70, () => {
	console.log('App running on port 70')
})

