import SearchBarMenu from "./features/SearchBarMenu";
import FilterOptions from "./features/FilterOptions";
import Location from "./features/Location";
import SchoolList from "./features/SchoolList";
import schoolData from "./data/schoolData";
import Image from "./features/Image";
import Footer from "./features/layout/footer";
import './styles/main.scss';
import React from "react";


const App = () => {
  
    console.log(this.state.schoolData);

    const mainStyle = {
      background: '#f2f2f2',
      marginTop: '30px',
      borderTop: '1px solid #d7d6d6'
    }

    return (
      <div className="App">
        <header className="header" style={{padding:'0 60px'}}> 
         <SearchBarMenu handleFilter={this.handleFilter} schoolData={this.state.schoolData}/>
         <FilterOptions />
        </header>
        <main style={mainStyle}>
          <div style={{padding: '20px 60px'}}>
            <Location />
          </div>
          <div id="resultsSection">
            <SchoolList schoolData={this.state.schoolData}/>
            <Image />
          </div>
        </main>
        <Footer />
      </div>
    );
}

export default App;
