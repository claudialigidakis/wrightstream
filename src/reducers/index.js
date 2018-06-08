import auth from './auth';
import products from './products';
import workstream from './workstream';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    auth,
    products,
    workstream,
    form: formReducer
});

export default rootReducer;
