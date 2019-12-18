var express = require('express');

// Create app
var app = express();
const PORT = process.env.PORT || 3000;

// Express Middleware - lets us handle incoming req's
// req - Incoming request
// res - What gets sent back
// next - Call this when done
app.use(function(req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'http') {
		next();
	} else {
		res.redirect('http://' + req.hostname + req.url);
	}
});

app.use(express.static('public'));

// Start server
app.listen(PORT, function() {
	console.log('Express server is up on PORT ' + PORT);
});
