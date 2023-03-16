const { createStore } = require("redux");


const initalState = {
    count: 0,
    todos:[],
    movies:[]
}
//reducer mengubah state
const counterReducer = (state = initalState, action) => {
    switch (action.type) {
        case "count/incremented":
            return {
                ...state,
                count: state.count + 1
            }
        case "movies/fetch":
            return{
                ...state,
                movies: action.payload
            }    
        default:
            return state;
    }
}

const store = createStore(counterReducer);
store.subscribe(() => console.log(store.getState()));
// action
store.dispatch({ type: 'counter/incremented' })
// {value: 1}
store.dispatch({ type: 'counter/incremented' })
// {value: 2}
store.dispatch({ type: 'counter/decremented' })
// {value: 1}
const data =[{id:1,data:""}]
store.dispatch({ 
    type: 'movies/fetchSuccess',
    payload:data
 })
