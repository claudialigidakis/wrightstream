import auth from './auth';
import products from './products';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    auth,
    products,
    form: formReducer
});

export default rootReducer;
