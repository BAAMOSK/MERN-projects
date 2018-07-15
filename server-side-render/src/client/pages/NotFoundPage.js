import React from 'react';

//STATIC ROUTER ONLY HANDLES SERVER ROUTES
const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return <h1>ROUTE NOT FOUND</h1>;
};

export default {
    component: NotFoundPage
};
