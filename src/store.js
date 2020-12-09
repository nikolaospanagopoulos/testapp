import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {pageListReducer,pageDetailsReducer,pageDeleteReducer,pageCreateReducer,pageUpdateReducer} from './reducers/pageReducers'


//i use redux so that i can fetch my data wherever i want without writing a lot of code every time

const reducer = combineReducers({
    pageList:pageListReducer,
    pageDetails:pageDetailsReducer,
    pageDelete:pageDeleteReducer,
    pageCreate:pageCreateReducer,
    pageUpdate:pageUpdateReducer
})

const initialState = {}

//i use redux thunk so that i can make asynchronous requests
const middleware = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools
    (applyMiddleware(...middleware)))


    export default store