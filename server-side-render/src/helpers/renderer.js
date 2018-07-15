//HELPERS FOLDER IS SERVER-SIDE
import React from 'react';
import { renderToString } from 'react-dom/server';
//STATIC ROUTER ONLY HANDLES SERVER ROUTES
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes';
//SERIALIZE replaces special characters to unicode
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';

//HELPS CONNECT CLIENT ROUTES TO SERVER ROUTES
//STATE HELD IN CREATESTORE AND PASSED HERE
export default (req, store, context) => {
    
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );
    
    const helmet = Helmet.renderStatic();

    return `
        <html>
            <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <div id="root">${content}</div>
                <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;  
};
