import SearchBarMenu from "./components/SearchBarMenu";
import FilterOptions from "./components/FilterOptions";
import Location from "./components/Location";
import SchoolList from "./components/SchoolList";
import schoolData from "./data/schoolData";
import Image from "./components/Image";
import Footer from "./components/Footer";
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
        <header className="header" style={{padding:'0 60px'}}> 
         <SearchBarMenu />
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
}

export default App;
