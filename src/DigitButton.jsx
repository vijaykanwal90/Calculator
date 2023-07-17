import React from 'react'
import { ACTIONS} from './Hero';

function DigitButton({dispatch , digit}) {
  return (
    
    <button  className=' cursor-pointer border-2 border-white ml-2 mb-2 py-4' onClick={()=> dispatch({type: ACTIONS.ADD_DIGIT , payload:{digit}})}>{digit}</button>
    
  )
}

export default DigitButton
