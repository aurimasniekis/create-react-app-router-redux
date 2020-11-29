import {createLogger} from 'redux-logger';
import {createBrowserHistory} from 'history';
import {configureStore as toolkitConfigureStore} from '@reduxjs/toolkit'
import {routerMiddleware} from 'connected-react-router'
import createRootReducer from './rootReducer';

const logger = createLogger();

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    return toolkitConfigureStore(
        {
            reducer: createRootReducer(history),
            middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(routerMiddleware(history)),
            devTools: process.env.NODE_ENV !== 'production',
            preloadedState,
            enhancers: []
        }
    );
}
