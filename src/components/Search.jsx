import { useState } from 'react'
import Data from '../json/data.json'

function Search() {

   const [searchItem, setSearchItem] = useState('')

    return (
        <div className="container" >
            <h1> Search Filter</h1>
            <input type="search" placeholder="search item" onChange={e => setSearchItem(e.target.value)} />
            {
                Data.filter((item)=>{
                    if(searchItem == ''){
                        return item
                    } else if(item.name.toLowerCase().includes(searchItem.toLowerCase())){
                        return item
                    }
                }).map((item, index)=>{
                    return(
                        <div key={index}>
                            <span> { item.name } </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Search
