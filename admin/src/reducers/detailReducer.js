import { FOOD_DETAIL_PENDING, FOOD_DETAIL_REJECT, FOOD_DETAIL_SUCCESS } from "../action/type";

const initialState = {
    pending: true,
    food: [],
    error: null
}

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOOD_DETAIL_PENDING:
            return {
                ...initialState
            };
        case FOOD_DETAIL_REJECT:
            return{
                ...state,
                pending:false,
                error:action.payload
            }
        case FOOD_DETAIL_SUCCESS:
            return{
                ...state,
                pending:false,
                food:action.payload
            }           
        default:
            return state;
    }
}

export default detailReducer;