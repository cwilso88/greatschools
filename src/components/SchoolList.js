import React from 'react'
import { Segment } from 'semantic-ui-react'
import SchoolItem from './SchoolItem';

const SchoolList = () => (
    <Segment.Group id="schoolList">
      <Segment>
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