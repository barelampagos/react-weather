var React = require('react');

var WeatherMessage = React.createClass({
	render: function() {
		var { location, temp } = this.props;

		return (
			<p>
				It's {temp} in {location}
			</p>
		);
	}
});

module.exports = WeatherMessage;
