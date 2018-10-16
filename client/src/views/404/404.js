import React from 'react';
import { Link } from 'react-router-dom';
import './404.css';

const NotFound = () => (
	<div className="page not-found">
		<div className="content-container">
			<h1>404</h1>
			<h3>Page Not Found</h3>
			<Link to="/">Back to home</Link>
		</div>
	</div>
);

export default NotFound