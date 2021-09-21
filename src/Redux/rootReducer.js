import {combineReducers} from 'redux'
import authReducer from './auth/authReducer';
import testReducer from './test/testReducer';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //localStorage


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "cart"],
  };

const rootReducer = combineReducers({
    test: testReducer,
    auth: authReducer
})

export default persistReducer(persistConfig,rootReducer);