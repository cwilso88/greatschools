import SearchBarMenu from "./components/SearchBarMenu";
import FilterOptions from "./components/FilterOptions";
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
       <SearchBarMenu />
       <FilterOptions />
      </header>
      <main style={mainStyle}>
        <div style={{padding: '0 60px 0 60px'}}>
hello
        </div>
      </main>
    </div>
  );
}

export default App;
