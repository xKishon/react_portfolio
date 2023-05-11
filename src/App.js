import Design from './components/Design'
import Home from './screen/Home';
import Bio from './components/Bio';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
    <div className="min-vh-100 position-relative" id="container_landing">
      <Design/>
      <Home className="position-absolute top-0 start-0 w-100 h-100" />
    </div>
    {/* <Navbar /> */}
    <Bio />
    </>
  );
}

export default App;
