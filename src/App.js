import SearchBarMenu from "./components/SearchBarMenu";
import FilterOptions from "./components/FilterOptions";
import Location from "./components/Location";
import SchoolList from "./components/SchoolList";
import Map from "./components/Map";
import './styles/main.scss';


function App() {
  const mainStyle = {
    background: '#f2f2f2',
    marginTop: '30px',
    borderTop: '1px solid #d7d6d6'
  }


  return (
    <div className="App">
      <header className="header" style={{padding:'40px 60px'}}> 
        <div className="site_title">
          <h1>Great Schools</h1>
          <h3>For Black Students</h3>
        </div>
       <SearchBarMenu />
       <FilterOptions />
      </header>
      <main style={mainStyle}>
        <div style={{padding: '20px 60px'}}>
          <Location />
        </div>
        <div id="resultsSection">
          <SchoolList />
          <Map />
        </div>
      </main>
    </div>
  );
}

export default App;
