import React from 'react'
import { Segment } from 'semantic-ui-react';
import classImg from '../styles/images/class.jpeg'

const Map = () => {
  const image = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%",
      borderTopLeftRadius: "50px",
      borderBottomRightRadius: "50px"
  }
    return(
    <Segment.Group id="map">
      <Segment>
        <img style={image} src={classImg} alt="class" loading="eager" height="475" width="483" />
      </Segment>
    </Segment.Group>
    )
}

export default Map;