import { FOOD_PENDING, FOOD_REJECT, FOOD_SUCCESS } from "../actions/type";

const initialState = {
  pending: true, 
  foods: [],
  error: null,
};

const foodReducer= (state =initialState,action)=>{
    switch (action.type) {
        case FOOD_PENDING:
            return{
                ...initialState
            };
        case FOOD_SUCCESS:
            return{
            ...state,
            pending: false,
            foods: action.payload
            }
        case FOOD_REJECT:
            return{
              ...state,
                pending: false,
                error: action.payload
            }    
        default:
            return state;
    }
}

export default foodReducer;