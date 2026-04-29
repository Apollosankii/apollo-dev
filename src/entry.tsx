import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';

// Hydrate the app on the client side for TanStack Start
const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}