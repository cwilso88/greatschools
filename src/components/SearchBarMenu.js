import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class SearchBarMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary id="searchBarMenu">
        <Menu.Item
          name='Search School'
        />
        <Menu.Menu position='center'>
          <Menu.Item>
            <Input icon='search' placeholder='City, zip, or school' />
          </Menu.Item>
          <Menu.Item
            name='Compare Schools'
            active={activeItem === 'Compare Schools'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}