import { placeholder } from '@babel/types'
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import schoolData from '../data/schoolData'
import Searchbar from './Searchbar'


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
            <Searchbar placeholder="City, zip, or school" schoolData={schoolData}/>
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