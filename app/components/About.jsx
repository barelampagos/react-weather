var React = require('react');

// Stateless functional component
// Can only do when Component only has 'render' method
var About = props => {
	return (
		<div>
			<h3>About</h3>
			<p>Welcome to About Page</p>
		</div>
	);
};

module.exports = About;
