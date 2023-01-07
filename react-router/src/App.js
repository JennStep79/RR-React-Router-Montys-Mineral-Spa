import {BrowserRouter as Router, Link, Routes, Route, useParams} from 'react-router-dom'
import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'
import Package from './components/Package';
import Contact from './components/Contact'



function App() {

  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']

  const {id} = useParams()
  console.log(id)
  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>

          <div className="navBar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/packages">Packages</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <main>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/packages" element={<Packages packages={packages}/>} />
              <Route path='/packages/:id' element={<Package packages={packages}/>} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </main>

        </header>
      </Router>
    </div>
  );
}

export default App;





