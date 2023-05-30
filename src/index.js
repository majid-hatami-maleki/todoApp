import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { TodoContextProvider } from './contexts/mainContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TodoContextProvider>
        <App />
    </TodoContextProvider>
);

