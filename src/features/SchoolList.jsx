import React from 'react'
import { Segment } from 'semantic-ui-react'
import SchoolItem from './SchoolItem'
import AboutUs from './about-us';




const SchoolList = ({ schoolData }) => {
  
    
  
  if (schoolData.length !== 0) {
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
  } else {
    return <AboutUs />
  }
  
}
  
export default SchoolList;