import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => createStore(
    combineReducers({
        auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;