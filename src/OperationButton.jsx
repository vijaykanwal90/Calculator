import React from 'react'
import {ACTIONS} from './App'
function OperationButton  ({dispatch , operation}) {
  return (
    <button className='  cursor-pointer border-2 border-white mb-2 mr-2 py-4'  onClick={()=> dispatch({type: ACTIONS.CHOOSE_OPERATION , payload:{operation}})}>{operation}</button>
    
  )
}

export default OperationButton
