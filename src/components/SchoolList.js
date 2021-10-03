import React from 'react'
import { Segment } from 'semantic-ui-react'
import SchoolItem from './SchoolItem'



class SchoolList extends React.Component {
  render() {
    return (
      <Segment.Group id="schoolList">
        <SchoolItem schoolData={this.props.schoolData} />
      </Segment.Group>
    );
  };
}
  
export default SchoolList;