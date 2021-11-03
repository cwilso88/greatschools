import React from 'react'
import { Input } from 'semantic-ui-react'



const Searchbar = ({ val, onSearch, ...props }) => {
    return (
        <span id="searchbar">
            <Input 
                icon='search' 
                value={val} 
                onChange={onSearch} 
                placeholder="City, zip, or school"
                {...props} 
            />
        </span>
    )
}

export default Searchbar;
