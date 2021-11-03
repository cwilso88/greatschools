import SearchBarMenu from "./features/search/SearchBarMenu";
import FilterOptions from "./features/layout/FilterOptions";
import Location from "./features/layout/breadcrump";
import SchoolList from "./features/search/SchoolList";
import schoolData from "./data/schoolData";
import Image from "./features/layout/Image";
import Footer from "./features/layout/footer";
import './styles/main.scss';
import React, { useState } from "react";


const App = () => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  // logic to filter through the school list
  const filteredSchools = schoolData.filter((school) => {
    return school.name.includes(searchTerm);
  })


    const mainStyle = {
      background: '#f2f2f2',
      marginTop: '30px',
      borderTop: '1px solid #d7d6d6'
    }

    return (
      <div className="App">
        <header className="header" style={{padding:'0 60px'}}> 
         <SearchBarMenu schools={filteredSchools} name="search" onSearch={handleInputChange} val={searchTerm} />
         <FilterOptions />
        </header>
        <main style={mainStyle}>
          <div style={{padding: '20px 60px'}}>
            <Location />
          </div>
          <div id="resultsSection">
            <SchoolList schools={filteredSchools}/>
            <Image />
          </div>
        </main>
        <Footer />
      </div>
    );
}

export default App;
