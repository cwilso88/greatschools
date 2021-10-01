import React from 'react'
import { Segment } from 'semantic-ui-react'
import SchoolItem from './SchoolItem';

const SchoolList = () => (
    <Segment.Group id="schoolList">
      <Segment style={{boxShadow: `1px 0px 12px -3px rgba(0,0,0,0.75)`}}>
        <SchoolItem />
      </Segment>
      <Segment>School</Segment>
      <Segment>School</Segment>
      <Segment>School</Segment>
      <Segment>School</Segment>
      <Segment>School</Segment>
      <Segment>School</Segment>
    </Segment.Group>
)

export default SchoolList;