const express = require('express');
const app = express();
const requests = require('request-promise-native');
const port = process.env.PORT || 8080;
const domain = process.env.DOMAIN;

if (domain === undefined) {
	throw 'You must specify a domain in your environmental variables.';
}

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/*', (req, res) => {
	const options = {
		uri: `${domain}${req.originalUrl}`,
		resolveWithFullResponse: true
	};
	requests(options)
		.then((data) => {
			console.log(`Responded to: ${domain}${req.originalUrl}`);
			return res.send(data);
		})
		.catch((err) => {
			console.log(`Errored on: ${domain}${req.originalUrl}`);
			return res.send(err);
		});
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
