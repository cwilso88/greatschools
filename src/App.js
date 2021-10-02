import SearchBarMenu from "./components/SearchBarMenu";
import FilterOptions from "./components/FilterOptions";
import Location from "./components/Location";
import SchoolList from "./components/SchoolList";
import schoolData from "./data/schoolData";
import Map from "./components/Map";
import './styles/main.scss';
import React from "react";


class App extends React.Component {
  constructor () {
    super()
    this.state = {
      schoolData
    }
  }
 
  render() {

    console.log(this.state.schoolData);

    const mainStyle = {
      background: '#f2f2f2',
      marginTop: '30px',
      borderTop: '1px solid #d7d6d6'
    }

    return (
      <div className="App">
        <header className="header" style={{padding:'40px 60px'}}> 
         <SearchBarMenu />
         <FilterOptions />
        </header>
        <main style={mainStyle}>
          <div style={{padding: '20px 60px'}}>
            <Location />
          </div>
          <div id="resultsSection">
            <SchoolList schoolData={this.state.schoolData}/>
            <Map />
          </div>
        </main>
      </div>
    );
  } 
}

export default App;
