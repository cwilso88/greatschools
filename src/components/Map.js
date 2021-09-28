import React from 'react'
import { Segment } from 'semantic-ui-react';
import classImg from '../styles/images/class.jpeg'

const Map = () => {
  const image = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%"
  }
    return(
    <Segment.Group id="map">
      <Segment>
        <img style={image} src={classImg} alt="class" loading="eager" height="575" width="583" />
      </Segment>
    </Segment.Group>
    )
}

export default Map;