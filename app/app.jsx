var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');

// JSX Code --> JS XML
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			{/* when URL path is /about --> render About component */}
			<Route path='about' component={About} />
			<IndexRoute component={Weather} />
		</Route>
	</Router>,
	document.getElementById('app')
);
