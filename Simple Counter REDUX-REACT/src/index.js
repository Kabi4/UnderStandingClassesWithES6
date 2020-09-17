import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware, compose} from 'redux';
import registerServiceWorker from './registerServiceWorker'; 
import reducer from './Store/reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


const logger = (store)=>{
    return (next)=>{
        return (action)=>{
            console.log("[Middleware] Dispatching the action",action);
            const result = next(action)
            console.log("[Middleware Dispatched your updated state]",store.getState());
            return result;
        }
    }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancer(applyMiddleware(logger,thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));
registerServiceWorker();
