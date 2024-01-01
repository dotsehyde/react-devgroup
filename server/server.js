import express from 'express';
import fs from 'fs';
import path from 'path';
import morgan from 'morgan';

import * as React from 'react';
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from '../src/App';

const app = express();

app.use(morgan('dev'));
app.use('^/$', (req, res, next) => {
	fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
		if (err) {
			return res.status(500).send("Internal Server Error");
		}
		const html = data.replace(
			'<div id="root"></div>',
			`<div id="root">${renderToString(
				<StaticRouter location={req.url} context={{}}>
					<App />
				</StaticRouter>
			)}</div>`
		);
		return res.send(html);
	});
});
app.use(express.static(path.resolve(__dirname, '..', 'build')));


app.listen(70, () => {
	console.log("Server is running on port 70");
});
