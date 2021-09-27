import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import Employees from './employees/reducer'
import User from './auth/user/reducer'

const rootReducer = (history) => combineReducers({
    Employees,
    User,
    router: connectRouter(history)
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = (history) => persistReducer(persistConfig, rootReducer(history))

export { rootReducer, persistedReducer }