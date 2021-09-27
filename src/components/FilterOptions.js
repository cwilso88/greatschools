import React, { Component } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

export default class FilterOptions extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

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
          active={activeItem === 'PreK'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Elementary'
          active={activeItem === 'Elementary'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Middle'
          active={activeItem === 'Middle'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='High School'
          active={activeItem === 'High School'}
          onClick={this.handleItemClick}
        />
        
        <Menu.Item position="right">
            <Button primary className="button">Sign Up</Button>
          </Menu.Item>
      </Menu>
    )
  }
}