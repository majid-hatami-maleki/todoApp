import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { TasksContextProvider } from './contexts/tasksContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TasksContextProvider>
        <App />
    </TasksContextProvider>
);

