import React from 'react'
import { Input } from 'semantic-ui-react'

function Searchbar() {
    return (
        <span id="searchbar">
            <Input icon='search' placeholder='City, zip, or school' />
        </span>
    )
}

export default Searchbar
