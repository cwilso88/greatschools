import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'


export default class SearchBarMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary id="searchBarMenu">
        <div className="logo">

        </div>
        <Menu.Item
          name='Find a great school for your child'
        />
        <Menu.Menu>
          <Menu.Item>
            <Input icon='search' placeholder='City, zip, or school' />
          </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
          <Menu.Item
            name='Compare Schools'
            active={activeItem === 'Compare Schools'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Parenting'
            active={activeItem === 'Parenting'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}