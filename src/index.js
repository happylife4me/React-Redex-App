// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import {createStore} from "redux"

//Create Store and attaching to reducer with initial state
const store = createStore(reducer, 1);

//subscribe yo store to get new state
store.subscribe(() => {
    console.log("Store Changed : " + store.getState())
})

//Dispatch action to invoke reducer
store.dispatch({type:"INC", payload:100})
store.dispatch({type:"INC", payload:10000})
store.dispatch({type:"DEC", payload:50})
store.dispatch({type:"DEC", payload:500})