import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import "./index.css"
import "./styles/NavBar.css"
import NavBar from './navBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import Services from './Services/Services';
import AboutUs from './AboutUs/AboutUs';
import Blog from './Blog/Blog';
import ContactUs from './ContactUs/ContactUs';
import OurPartners from './OurPartners/OurPartners';
import Footer from './Footer/Footer';


function App() {

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='/blog' element ={<Blog/>}/>
          <Route path='/contactUs' element={<ContactUs/>}/>
          <Route path='/Partners' element={<OurPartners/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
