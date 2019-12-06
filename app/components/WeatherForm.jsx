var React = require('react');

var WeatherForm = React.createClass({
	render: function() {
		return (
			<form>
				<div>
					<input placeholder='Enter city Name' type='text'></input>
				</div>
				<div>
					<button>Get Weather</button>
				</div>
			</form>
		);
	}
});

module.exports = WeatherForm;
