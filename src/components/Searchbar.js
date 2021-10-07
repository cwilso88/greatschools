import React from 'react'
import { Input } from 'semantic-ui-react'



function Searchbar({ placeholder, schoolData }) {
    
    return (
        <span id="searchbar">
            <Input icon='search' data={schoolData} placeholder={placeholder} />
        </span>
    )
}

export default Searchbar
