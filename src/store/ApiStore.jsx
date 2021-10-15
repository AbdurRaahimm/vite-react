import React, {useReducer} from 'react'

const initialState ={
    loading: true,
    error: '',
    post: [],
};

const reducer = (state, action) =>{
    switch (action.type) {
        case 'SUCCESS':
            return{
                loading: false,
                error: '',
                post: action.result,
            }
        case 'ERROR':
            return{
                loading: false,
                error: 'Data Fetching Error',
                post: [],
            }
    
        default:
            return state;
    }

}

  export const ApiContext =  React.createContext(initialState)
function ApiStore({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ApiContext.Provider value={[state, dispatch]}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiStore
