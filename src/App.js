
import './App.css';
import { useReducer } from 'react';
import DigitButton from './DigitButton';
export const ACTIONS ={
  ADD_DIGIT:"add-digit",
  CHOOSE_OPERATION:"choose-Operation",
  CLEAR:"clear",
  DELETE_DIGIT:"delete-digit",
  EVALUATE:"evaluate"
}
function reducer(state , {type , payload} ){
switch(type){
  case ACTIONS.ADD_DIGIT:
    return {
      ...state,
      // currentOperand: `${currentOperand || " "}${payload.digit}`,
       currentOperand: `${state.currentOperand || " "}${payload.digit}`,
    }
    default:
      return state;
}

}
function App() {
  const [{ currentOperand ,prevOperand,  operation} , dispatch] = useReducer(reducer , {});
  // dispatch({type: ACTIONS.ADD_DIGIT, payload:{digit:1}})
  return (
    <div>
    <div className=' w-[350px] h-[500px] mx-auto mt-12 bg-gradient-to-r from-blue-500 to-cyan-500'>
      <div className='flex flex-col justify-center items-end h-24 mt-8 text-white pr-4 pt-4 text-lg bg-black'>
      <div className='font-[1rem]'>{prevOperand} {operation}</div>
      <div className='font-[2rem]'>{currentOperand}</div>
      </div>
     <div className=' group grid grid-cols-4  mt-[1rem] gap-2 mx-auto mb-2 px-auto py-auto'>
    <button className='  cursor-pointer border-2 border-white ml-2  py-4 col-span-2  mb-2'>AC</button>
    <button className='  cursor-pointer border-2 border-white mb-2  py-4'>DEl</button>
    <button className='  cursor-pointer  border-2 border-white  mb-2 mr-2  py-4' >/</button>
    <DigitButton   className=' cursor-pointer border-2 border-white ml-2 mb-2 py-4' digit="1" dispatch={dispatch}  />
    {/* <button className='  cursor-pointer border-2 border-white mb-2 py-4'>2</button> */}
    <DigitButton   className=' cursor-pointer border-2 border-white mb-2 py-4' digit="2" dispatch={dispatch}  />
    {/* <button className='  cursor-pointer border-2 border-white mb-2 py-4'>3</button> */}
    <DigitButton   className=' cursor-pointer border-2 border-white mb-2 py-4' digit="3" dispatch={dispatch}  />
    <button className='  cursor-pointer border-2 border-white mb-2 mr-2 py-4'>X</button>
    {/* <button className='  cursor-pointer border-2 border-white ml-2 mb-2 py-4'>4</button> */}
    <DigitButton   className=' cursor-pointer border-2 border-white ml-2 mb-2 py-4' digit="4" dispatch={dispatch}  />
    {/* <button className='  cursor-pointer border-2 border-white mb-2 py-4'>5</button> */}
    <DigitButton   className=' cursor-pointer border-2 border-white mb-2 py-4' digit="5" dispatch={dispatch}  />
    {/* <button className='  cursor-pointer border-2 border-white mb-2 py-4'>6</button> */}
    <DigitButton   className=' cursor-pointer border-2 border-white mb-2 py-4' digit="6" dispatch={dispatch}  />
    <button className='  cursor-pointer border-2 border-white mb-2 mr-2 py-4'>+</button>
    {/* <button className='  cursor-pointer border-2 border-white ml-2 mb-2 py-4'>7</button> */}
    <DigitButton   className=' cursor-pointer border-2 border-white ml-2 mb-2 py-4' digit="7" dispatch={dispatch}  />
    {/* <button className='  cursor-pointer border-2 border-white mb-2 py-4'>8</button> */}
    <DigitButton   className=' cursor-pointer border-2 border-white mb-2 py-4' digit="8" dispatch={dispatch}  />
    {/* <button className='  cursor-pointer border-2 border-white mb-2 py-4'>9</button> */}
    <DigitButton   className=' cursor-pointer border-2 border-white mb-2 py-4' digit="9" dispatch={dispatch}  />
    <button className='  cursor-pointer border-2 border-white mb-2 mr-2  py-4'>-</button>
    {/* <button className='  cursor-pointer border-2 border-white ml-2 mb-2 mb-2 py-4 mb-4'>.</button> */}
    <DigitButton   className=' cursor-pointer border-2 border-white ml-2 mb-2 mb-2 py-4 mb-4' digit="." dispatch={dispatch}  />

    {/* <button className='  cursor-pointer border-2 border-white mb-2 mb-2 py-4 mb-4'>0</button> */}
    <DigitButton   className='  cursor-pointer border-2 border-white mb-2 mb-2 py-4 mb-4' digit="0" dispatch={dispatch}  />
{/*  */}
    <button  className=' cursor-pointer col-span-2  border-2 border-white mr-2 py-4 mb-4'>=</button>
    </div>
    </div>
    </div>
  );
}

export default App;
