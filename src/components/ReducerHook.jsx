import { useReducer } from "react";
const initialState = 0
const reduce = (state,action)=>{
    switch(action){
        case  "increment":
            return state+1;
        case "decrement":
            return state-1;
        case "reset":
            return initialState;
        default:
            return state
    }
}
const ReducerHook = () => {
    const [count,dispatch] = useReducer(reduce,initialState)
    return (
        <div>
            <button onClick={()=>dispatch("increment")} >Increment</button> 
            <button onClick={()=>dispatch("decrement")}  >Decrement</button> 
            <button onClick={()=>dispatch("reset")} >Reset</button> 
            <h1>count : {count}</h1>
        </div>
    );
};

export default ReducerHook;