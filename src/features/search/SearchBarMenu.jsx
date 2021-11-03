import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import Searchbar from '../layout/Searchbar'


const SearchBarMenu = ({schools}) => {
  // Click to activate the filter buttons
  const [activeItem, setActiveItem] = useState('home');
  const handleItemClick = (e, {name}) => {
    setActiveItem(e.target.name);
  }

    return (
      <Menu secondary id="searchBarMenu">
        <div className="logo">

        </div>
        <Menu.Item
          name='Find a great school for your child'
        />
        <Menu.Menu>
          <Menu.Item>
            <Searchbar schools={schools}/>
          </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
          <Menu.Item
            name='Compare Schools'
            active={activeItem === 'Compare Schools'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Parenting'
            active={activeItem === 'Parenting'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
}

export default SearchBarMenu;