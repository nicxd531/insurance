import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import "./index.css"
import "./styles/navBAr.css"
import NavBar from './navBar/NavBar'
function App() {

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>

        </Routes>
      </Router>
    </div>
  )
}

export default App
