import React, { useState } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'


// HOC
// export default function Component({ title, description, canonincal, children})

// about-us url
// AboutUs.jsx badly named component
// about-us.jsx


const FilterOptions = () => {
  const [activeItem, setActiveItem] = useState(false);
  const handleItemClick = () => {
    setActiveItem(true);
  }
  //state = { activeItem: 'home' }


  

    return (
      <Menu size='small' id="filterOptions">
        <Menu.Menu position='left'>
          <Dropdown item text='Public/Private School'>
            <Dropdown.Menu>
              <Dropdown.Item>Public</Dropdown.Item>
              <Dropdown.Item>Private</Dropdown.Item>
              <Dropdown.Item>Charter</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
        
        <Menu.Item
          name='PreK'
          
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Elementary'
          active={activeItem === 'Elementary'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Middle'
          active={activeItem === 'Middle'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='High School'
          active={activeItem === 'High School'}
          onClick={handleItemClick}
        />
        
        <Menu.Item position="right">
            <Button primary className="button">Sign Up</Button>
          </Menu.Item>
      </Menu>
    )
}

export default FilterOptions;