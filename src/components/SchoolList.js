import React from 'react'
import { Segment } from 'semantic-ui-react'
import SchoolItem from './SchoolItem';

export default class SchoolList extends React.Component {
  //Methods for the search results
  loopSchools() {
    const { schoolData } = this.props;

    return schoolData.map((school) => {
      return (
        <Segment key={school.id} style={{ boxShadow: `1px 0px 12px -3px rgba(0,0,0,0.75)` }}>
          <SchoolItem />
        </Segment>
      );
    });
  }

  render() {
    return <Segment.Group id="schoolList">{this.loopSchools()}</Segment.Group>;
  }
}
