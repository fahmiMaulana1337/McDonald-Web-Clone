import { FOOD_PENDING, FOOD_REJECT, FOOD_SUCCESS,FOOD_DETAIL_PENDING,FOOD_DETAIL_SUCCESS,FOOD_DETAIL_REJECT } from "./type";


const url ='https://clone.mekdi-keknya.shop/pub/';
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

export const fetchFromFood= () =>
    async (dispatch,getState)=>{
        dispatch(foodPending());
        try{
            const response = await fetch(`${url}item`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            });
            if(!response.ok){
                throw new Error(response.statusText);
            }
            const responseJson = await response.json();
         
            dispatch(foodSuccess(responseJson));
        }catch(err){
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
            const response = await fetch(`${url}/item/${id}`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            if(!response.ok){
                throw new Error(response.statusText);
            }
            const responseJson = await response.json();
            dispatch(detailSuccess(responseJson))
        } catch (err) {
            console.log(err)
            dispatch(detailReject(err))
        }
    }
