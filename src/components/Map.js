import React from 'react'
import { Segment } from 'semantic-ui-react';
import classImg from '../styles/images/class.jpeg'

const Map = () => {
    return(
    <Segment.Group>
      <Segment>
        <img className="main_img" src={classImg} alt="class" loading="eager" height="525" width="533" />
      </Segment>
    </Segment.Group>
    )
}

export default Map;