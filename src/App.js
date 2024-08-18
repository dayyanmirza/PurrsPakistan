import Navbar from './Navbar';
import Home from './Home';
import Cats from './Cats';
import About from './About';

function App() { 
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <Cats />
        <About />
      </div>
    </div>
  );
}

export default App;
