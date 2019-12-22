var React = require('react');

// Stateless functional component
// Can only do when Component only has 'render' method
var About = props => {
	return (
		<div>
			<h1 className='text-center page-title'>About</h1>
			<p>
				Welcome to the React Weather App! This is a learning project for React &
				Foundation, and utilizes the Open Weather Map API.
			</p>
		</div>
	);
};

module.exports = About;
