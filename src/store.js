import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {pageListReducer,pageDetailsReducer} from './reducers/pageReducers'

const reducer = combineReducers({
    pageList:pageListReducer,
    pageDetails:pageDetailsReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools
    (applyMiddleware(...middleware)))


    export default store