var React = require('react');

var ErrorModal = React.createClass({
	getDefaultProps: function() {
		return {
			title: 'Error'
		};
	},
	// Defining types of incoming props
	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},
	//componentDidMount() is invoked immediately after a component is mounted (inserted into the tree)
	componentDidMount: function() {
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function() {
		var { title, message } = this.props;

		return (
			<div id='error-modal' className='reveal tiny text-center' data-reveal=''>
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className='button hollow' data-close=''>
						Okay
					</button>
				</p>
			</div>
		);
	}
});

module.exports = ErrorModal;
