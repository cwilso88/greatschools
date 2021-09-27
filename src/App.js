import SearchBarMenu from "./components/SearchBarMenu";
import FilterOptions from "./components/FilterOptions";
import './styles/main.scss';


function App() {
  return (
    <div className="App" style={{padding:'20px 60px'}}>
      <header className="header">
       <SearchBarMenu />
       <FilterOptions />
      </header>
      <hr/>
    </div>
  );
}

export default App;
