import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";

import thunk from "redux-thunk";
import categoryReducer from "../reducers/categoryReducer";
import foodReducer from "../reducers/foodReducer";
import detailReducer from "../reducers/detailReducer";

const rootReducer = combineReducers({
    food:foodReducer,
    category:categoryReducer,
    detail:detailReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;