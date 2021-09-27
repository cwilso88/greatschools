import SearchBarMenu from "./components/SearchBarMenu";
import './styles/main.scss';


function App() {
  return (
    <div className="App" style={{padding:'20px 60px'}}>
      <header className="header">
       <SearchBarMenu />
      </header>
    </div>
  );
}

export default App;
