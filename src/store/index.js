//import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit'
import counterSliceReducer from './counter';
import AuthSliceReducer from './auth';


/* const counterReducer = (state=initialState,action)=>{
    if(action.type==='increment'){
        return{
            counter:state.counter+1,
            showCounter:state.showCounter
          }
    }

    if(action.type==='decrement'){
        return{
            counter:state.counter-1,
            showCounter:state.showCounter
          }
    }

    if(action.type==='increase'){
        return{
            counter:state.counter + action.amount,
            showCounter:state.showCounter
          }
    }

    if(action.type==='display'){
        return{
            showCounter:!state.showCounter,
            counter:state.counter
          }
    }
 
    return state;
} */

const store = configureStore(
    {
        reducer : {counter:counterSliceReducer,auth:AuthSliceReducer}
    }
);


export default store;
