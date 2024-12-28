import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRedux from './components/App-redux.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function changeStore(state = [], action) {
    switch (action.type) {
        case 'ADD_LOB':
            return [...state, action.payload];
        default:
            return state;
    }
}

const store = createStore(changeStore);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <AppRedux />
    </Provider>
);