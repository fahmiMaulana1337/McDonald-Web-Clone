import { FOOD_PENDING, FOOD_REJECT, FOOD_SUCCESS, CATEGORY_PENDING, CATEGORY_REJECT, CATEGORY_SUCCESS, FOOD_DETAIL_PENDING, FOOD_DETAIL_SUCCESS, FOOD_DETAIL_REJECT } from "./type";

const url = 'https://clone.mekdi-keknya.shop/';
export const categoryPending = () => {
    return {
        type: CATEGORY_PENDING
    }
}
export const categoryReject = (errorMessage) => {
    return {
        type: CATEGORY_REJECT,
        payload: errorMessage
    }
}

export const categorySuccess = (food) => {
    return {
        type: CATEGORY_SUCCESS,
        payload: food
    }
}

export const fetchFromCategory = () =>
    async (dispatch, getState) => {
        dispatch(categoryPending());
        try {
            const response = await fetch(url + 'category', {
                method: 'GET',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const responseJson = await response.json();
            dispatch(categorySuccess(responseJson));
        } catch (err) {
            dispatch(categoryReject(err.message));
        }
    }
export const foodPending = () => {
    return {
        type: FOOD_PENDING
    }
}
export const foodReject = (errorMessage) => {
    return {
        type: FOOD_REJECT,
        payload: errorMessage
    }
}

export const foodSuccess = (food) => {
    return {
        type: FOOD_SUCCESS,
        payload: food
    }
}

export const fetchFromFood = () =>
    async (dispatch, getState) => {
        dispatch(foodPending());
        try {
            const response = await fetch(url + 'item', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    access_token: localStorage.getItem('access_token')
                }
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const responseJson = await response.json();
            dispatch(foodSuccess(responseJson));
        } catch (err) {
            dispatch(foodReject(err.message));
        }
    }


    
export const detailPending = ()=>{
    return {
        type:FOOD_DETAIL_PENDING
    }
}

export const detailSuccess = (food)=>{
    return {
        type:FOOD_DETAIL_SUCCESS,
        payload:food
    }
}
export const detailReject= (error) =>{
    return {
        type:FOOD_DETAIL_REJECT,
        payload:error
    }
}

export const fetchFromDetailFood = (id) => 
    async (dispatch,getState) => {
        dispatch(detailPending());
        try {
            const response = await fetch(`${url}item/${id}`,{
                method:'GET',
                headers: {
                    'Content-Type': 'application/json',
                    access_token: localStorage.getItem('access_token')
                }
            })
            if(!response.ok){
                throw new Error(response.statusText);
            }
            const responseJson = await response.json();
            dispatch(detailSuccess(responseJson))
        } catch (err) {
            dispatch(detailReject(err))
        }
    }

