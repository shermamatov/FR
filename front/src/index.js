import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ChelContext from './Contexts/ChelContext';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store from './redux/index';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

root.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <ChelContext>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ChelContext>
        </QueryClientProvider>
    </Provider>
);
