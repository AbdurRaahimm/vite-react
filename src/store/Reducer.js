export  const Reducer = (state, action)=>{
    switch (action.type) {
        case 'increment':
            return{
                ...state,
                num: state.num + 1
            };
        case 'decrement':
            return{
                ...state,
                num: state.num === 0 ? 0 : state.num  - 1
            };    
        default:
            return state;
    }
};
