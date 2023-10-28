import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './layouts/NavBar';
import { Link , BrowserRouter as Router , Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <NavBar/>
    </Router>
  );
}

export default App;
