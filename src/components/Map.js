import React from 'react'
import { Segment } from 'semantic-ui-react';
import classImg from '../styles/images/grads.jpeg'

const Map = () => {
  const image = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      objectFit: "cover",
      width: "100%",
      borderTopLeftRadius: "50px",
      borderBottomRightRadius: "50px", 
      boxShadow: `0px 1px 20px 1px #2b6777`,
  }
    return(
    <Segment.Group id="map">
      <Segment>
        <img style={image} src={classImg} alt="class" loading="eager" height="475" width="223" />
      </Segment>
    </Segment.Group>
    )
}

export default Map;