import React from 'react'
import { Breadcrumb } from 'semantic-ui-react';


const sections = [
    { key: 'Home', content: 'Home', link: true },
    { key: 'Store', content: 'Store', link: true },
    { key: 'Shirt', content: 'T-Shirt', active: true },
  ]

const style = {
    color: '#2b6777'
}


const Location = () => (
  <div id="location">
      <Breadcrumb icon='right angle' sections={sections} />
      <h3>Showing <span className="number">500</span> schools found in <span className="city" style={style}>Atlanta, GA</span></h3>
  </div>
)

export default Location;