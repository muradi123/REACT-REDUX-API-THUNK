import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { AllReducers } from '../reducers/RootReducer'

export const store = createStore(AllReducers, applyMiddleware(thunk))