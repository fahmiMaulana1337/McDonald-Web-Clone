import { CATEGORY_PENDING, CATEGORY_REJECT, CATEGORY_SUCCESS } from "../action/type";

const initialState = {
  pending: true, 
  categories: [],
  error: null,
};

const categoryReducer= (state =initialState,action)=>{
    switch (action.type) {
        case CATEGORY_PENDING:
            return{
                ...initialState
            };
        case CATEGORY_SUCCESS:
            return{
            ...state,
            pending: false,
            categories: action.payload
            }
        case CATEGORY_REJECT:
            return{
              ...state,
                pending: false,
                error: action.payload
            }    
        default:
            return state;
    }
}

export default categoryReducer;