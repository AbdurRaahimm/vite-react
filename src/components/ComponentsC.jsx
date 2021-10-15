import React, {useContext} from 'react'
import { numContext } from '../store/Store'

function ComponentsC() {

    const [state, dispatch] = useContext(numContext)
   
    return (
        <>
           <h1> {state.num} </h1>
           <div className="btn">
               <button onClick={()=>dispatch({type: 'increment'})} >+</button>
               <button onClick={()=>dispatch({type: 'decrement'})} >-</button>
           </div>
        </>
    )
}

export default ComponentsC
