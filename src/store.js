import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {pageListReducer} from './reducers/pageReducers'

const reducer = combineReducers({
    pageList:pageListReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools
    (applyMiddleware(...middleware)))


    export default store