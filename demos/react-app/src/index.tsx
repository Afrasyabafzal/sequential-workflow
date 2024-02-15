import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import './index.css';

import 'custom-react-flow/css/designer.css';
import 'custom-react-flow/css/designer-light.css';
import 'custom-react-flow/css/designer-dark.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
