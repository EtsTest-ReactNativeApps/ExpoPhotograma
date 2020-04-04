import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducer from './redux.config';
import rootSaga from './sagas.config';

const logger = createLogger({
    collapsed: true,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const storeObj = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware, logger)));

sagaMiddleware.run(rootSaga);

export const store = storeObj;
