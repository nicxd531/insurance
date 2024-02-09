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
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';


function App() {
  const theme = createTheme({
    palette:{
        primary:{
            main:"#255B7D"
        },
        secondary:{
            main:"#3CBF54"
        }
    }
})

  // calling aos on refresh
  useEffect(()=>{
    AOS.init(
       { duration: 600,
        easing: 'ease',
        once: false}
    );
  })
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </div>
  )
}

export default App
