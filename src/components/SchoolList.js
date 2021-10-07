import React from 'react'
import { Segment } from 'semantic-ui-react'
import schoolData from '../data/schoolData';
import SchoolItem from './SchoolItem'



function SchoolList() {
    return (
      // Map through the schoolData and 
      // return each school's data and 
      // pass that data down to the SchoolItem component for usage
      <Segment.Group id="schoolList">
        {schoolData.map((school) => {
          return <SchoolItem school={school} />
        })}
      </Segment.Group>
    );
}
  
export default SchoolList;