import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client';
import { RouterProvider } from "react-router-dom";
import { getApolloClient } from './apollo';
import { router } from './router';
import "./style/main.scss";

const CMS_API_URI: string = import.meta.env.VITE_CMS_API_URI;
const CMS_API_TOKEN: string = import.meta.env.VITE_CMS_API_TOKEN;
const ROUTER = router;

document.title = "Timothy James Montesa: Full-Stack Software Engineer & Web Dev";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ApolloProvider client={getApolloClient(CMS_API_URI, CMS_API_TOKEN)}>
        <RouterProvider router={ROUTER} />
    </ApolloProvider>
);
