import React, { useState } from 'react'
import { Segment } from 'semantic-ui-react'
import schoolData from '../data/schoolData';
import SchoolItem from './SchoolItem'
import AboutUs from './AboutUs';



function SchoolList() {
  const [filteredData, setFilteredData] = useState([]);
    
  
  if (filteredData.length !== 0) {
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