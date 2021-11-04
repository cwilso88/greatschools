import React from 'react'
import { Segment } from 'semantic-ui-react'
import SchoolCard from './SchoolCard'
import AboutUs from '../layout/about-us';




const SchoolList = ({ schools }) => {
  
    
  
  if (schools.length !== 0) {
    return (
      // Map through the schoolData and 
      // return each school's data and 
      // pass that data down to the SchoolCard component for usage
      
      <Segment.Group id="schoolList">
          {schools.map((school) => {
          return <SchoolCard school={school} />
        })}
      </Segment.Group>
    );
  } else {
    return <AboutUs />
  }
  
}
  
export default SchoolList;