import React from 'react'
import { Input } from 'semantic-ui-react'



function Searchbar({ placeholder, schoolData, handleFilter }) {
    
    
    console.log(handleFilter)
    return (
        <span id="searchbar">
            <Input icon='search' schoolData={schoolData} onChange={handleFilter} placeholder={placeholder} />
        </span>
    )
}

export default Searchbar
