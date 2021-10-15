import React , {useReducer} from 'react'
import {Reducer} from './Reducer';


const initialState =  {
    num: 0,
    count:5,
}

export const numContext =  React.createContext(initialState);

function Store({children}) {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <numContext.Provider value={[state, dispatch]}>
            {children}
        </numContext.Provider>
    )
}

export default Store
