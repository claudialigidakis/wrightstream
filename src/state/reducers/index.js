import auth from './auth';
import shop from './shop';
import stores from './stores';
import admin from './admin';
import helper from './helper';
import products from './products';
import inventory from './inventory';
import workstream from './workstream';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    auth,
    shop,
    stores,
    admin,
    helper,
    products,
    inventory,
    workstream,
    form: formReducer
});

export default rootReducer;
