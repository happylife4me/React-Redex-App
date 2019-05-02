import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import logger from "redux-logger"

import {createStore, applyMiddleware} from "redux"
import{composeWithDevTools} from "redux-devtools-extension"

import AllReducers from "./Reducers/index"

import './index.css';
import App from './Componets/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(AllReducers, composeWithDevTools(applyMiddleware(logger)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//----------------------------------------------------------------------------------------
// Lavel 1
//----------------------------------------------------------------------------------------
/* import {createStore, applyMiddleware} from "redux"
import logger from "redux-logger"

const reducer = function(state, action){
    console.log(state, action)
    if (action.type === "INC"){
        return state + action.payload;
    }
    if (action.type === "DEC"){
        return state - action.payload;
    }
    return state;
}

const middleware = applyMiddleware(logger)
//Create Store and attaching to reducer with initial state
const store = createStore(reducer, 1, middleware);

//subscribe you store to get new state
store.subscribe(() => {
    console.log("Store Changed : " + store.getState())
})

//Dispatch action to invoke reducer
store.dispatch({type:"INC", payload:100})
store.dispatch({type:"INC", payload:10000})
store.dispatch({type:"DEC", payload:50})
store.dispatch({type:"DEC", payload:500}) */

//----------------------------------------------------------------------------------------
// Lavel 3
//----------------------------------------------------------------------------------------

/* import {createStore, applyMiddleware, combineReducers} from "redux"
import logger from "redux-logger"

import{composeWithDevTools} from "redux-devtools-extension"

const useReducer = (state={}, action) => {
    switch (action.type) {
        case "CHANGE_NAME":{
            return state={...state, name:action.payload};
        }
        case "CHANGE_AGE":{
            return state={...state, age:action.payload};
        }
    }
    return state;
}

const tweetReducer = (state = [1,2,3,4,5,6,7,8,9,10], action) => {
    switch (action.type) {
        case "ADD_ARRAY":{
            return state= state.push(action.payload);
        }
        case "REMOVE_ARRAY":{
            const s = state.indexOf(action.payload);
            return state= state.slice(s,1);
        }
    }
    return state;
}

const reducers = combineReducers({
    user:useReducer,
    tweet:tweetReducer
})

const store = createStore(reducers, 1, composeWithDevTools(applyMiddleware(logger)));

//subscribe you store to get new state
store.subscribe(() => {
    console.log("Store Changed : " + store.getState())
})

//Dispatch action to invoke reducer
store.dispatch({type:"CHANGE_NAME", payload:"Jagadeesh"})
store.dispatch({type:"CHANGE_AGE", payload:36})
store.dispatch({type:"CHANGE_NAME", payload:"Krishnam"})
store.dispatch({type:"CHANGE_AGE", payload:37})


// store.dispatch({type:"ADD_ARRAY", payload:36})
// store.dispatch({type:"REMOVE_ARRAY", payload:10})
// store.dispatch({type:"ADD_ARRAY", payload:45})
// store.dispatch({type:"REMOVE_ARRAY", payload:5}) */

//----------------------------------------------------------------------------------------
// Lavel 4
//----------------------------------------------------------------------------------------

/* import {createStore, applyMiddleware, combineReducers} from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import axios from "axios"
import{composeWithDevTools} from "redux-devtools-extension"

const initialState={
    fetching: false,
    fetched: false,
    user:[],
    error:null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USER_START":
            return {...state, fetching:true}
        case "FETCH_USER_ERROR":
            return {...state, fetching:false,error:action.payload}
        case "RECEIVE_USERS":
            return {...state, fetching:false,error:"", fetched: true,user:action.payload}
    }
    return state
}

const middleware = composeWithDevTools(applyMiddleware(thunk,logger));
const store = createStore(reducer, middleware);

store.dispatch((dispatch) => {
    dispatch({type:"FETCH_USER_START"})

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        dispatch({type:"RECEIVE_USERS", payload:res.data})
    })
    .catch((err) => {
        dispatch({type:"FETCH_USER_ERROR", payload:err})
    })
})
 */