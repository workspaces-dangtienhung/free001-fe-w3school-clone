import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
	<>
		<App />
		<Toaster />
	</>,
	document.getElementById('root')
);
