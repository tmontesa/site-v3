import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloProvider } from '@apollo/client';
import { getApolloClient } from './apollo';

const CMS_API_URI: string = import.meta.env.VITE_CMS_API_URI
const CMS_API_TOKEN: string = import.meta.env.VITE_CMS_API_TOKEN

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ApolloProvider client={getApolloClient(CMS_API_URI, CMS_API_TOKEN)}>
        <App />
    </ApolloProvider>
);
