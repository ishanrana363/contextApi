// import { useReducer } from "react";
// const initialState = {
//     firstCounter : 0,
//     secondCounter : 10
// }
// const reducer = (state,action)=>{
//     switch(action.type){
//         case "increment":
//             return {firstCounter : state.firstCounter+ action.value};
//         case "decrement":
//             return{firstCounter:state.firstCounter- action.value};
//             case "increment1":
//                 return {secondCounter : state.secondCounter+ action.value};
//             case "decrement2":
//                 return{secondCounter:state.secondCounter- action.value};
//         case "reset":
//             return initialState;
//         default:
//             return state
//     }
// }
// const Counter = () => {
//     const [count,disPatch] = useReducer(reducer,initialState)
//     return (
//         <div>
//             <button onClick={()=>disPatch({type:"increment",value:1})} >Increment</button>
//             <button onClick={()=>disPatch({type:"decrement",value:1})} >decremetn</button>
//             <button onClick={()=>disPatch({type:"increment",value:5})} >Increment 5 </button>
//             <button onClick={()=>disPatch({type:"decrement",value:5})} >decremetn 5 </button>
//             <div>
//             <button onClick={()=>disPatch({type:"increment",value:10})} >Increment 10 </button>
//             <button onClick={()=>disPatch({type:"decrement",value:10})} >decremetn 10 </button>
//             </div>
//             <button onClick={()=>disPatch({type:"reset"})} >Reset</button>
//             <h1>Count : {count.firstCounter} </h1>
//         </div>
//     );
// };



// export default Counter;

import { useReducer } from "react";

const initialValue = {
    firstCounter : 0,
    secondCounter : 5
}
const reducer = (state ,action)=>{
    switch(action.type){
        case "increment":
            return{...state,firstCounter:state.firstCounter+action.value};
        case "decrement":
            return {...state,firstCounter:state.firstCounter-action.value};
        case "increment1":
            return{...state,firstCounter:state.firstCounter+action.value};
        case "decrement1":
            return {...state,firstCounter:state.firstCounter-action.value};    
        case "reset":
            return initialValue
            case "increment2":
                return{...state,secondCounter:state.secondCounter+action.value};
            case "decrement2":
                return {...state,secondCounter:state.secondCounter-action.value};
    }
}
const Counter = () => {
    const [count,dispoth] = useReducer(reducer,initialValue)
    return (
        <div>
            <button onClick={()=>dispoth({type:"increment",value:1})} >Increment</button>
            <button onClick={()=>{dispoth({type:"decrement",value:1})}} >Decrement</button>
            <button onClick={()=>dispoth({type:"increment1",value:5})} >Increment5</button>
            <button onClick={()=>{dispoth({type:"decrement1",value:5})}} >Decrement5</button>
            <button onClick={()=>{dispoth({type:"reset"})}} >Reset</button><br /><br /><br />
            <h1>count : {count.firstCounter} </h1>
            <div>
                <button onClick={()=>{dispoth({type:"increment2" ,value:10 })}}>Increment10</button>
                <button onClick={()=>{dispoth({type:"decrement2" ,value:10 })}}>Increment10</button><br />
                <h1>{count.secondCounter}</h1>
            </div>
        </div>
    );
};

export default Counter;