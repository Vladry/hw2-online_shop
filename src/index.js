import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import App from './App';


ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <App/>
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
);


