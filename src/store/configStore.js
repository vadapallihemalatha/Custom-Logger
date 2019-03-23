import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducer/counterReducer';

const customLogger = store => {
    return next => {
        return action =>{
            const result = next(action);
            console.log(`Middleware ${JSON.stringify(result)}`);
            return result;
        }
    }
}
const store = createStore(rootReducer, applyMiddleware(thunk, customLogger));

export default store;