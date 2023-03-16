import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";

import thunk from "redux-thunk";
import detailReducer from "../reducers/detailFoodReducer";
import foodReducer from "../reducers/foodReducer";

const rootReducer = combineReducers({
    food:foodReducer,
    detail:detailReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;