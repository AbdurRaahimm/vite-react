import {useContext, useEffect} from "react";
import {ApiContext} from '../store/ApiStore'

function Hello() {

    const [state, dispatch] = useContext(ApiContext);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                dispatch({type: 'SUCCESS', result: data})
            })
            .catch(()=>{
                dispatch({type: 'ERROR'})
            })
       
    }, [])
    return (
        <>
            <h1>Fetch Api</h1>
            <p>
                {state.loading ? 'Loading.....' : state.post.title}
                {state.error || null}
            </p>
        </>
    )
}

export default Hello
