import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Gallery from "./pages/gallery/Gallery"
import Plans from "./pages/plans/Plans"
import Trainer from "./pages/trainers/Trainer"
import NotFound from "./pages/notFound/NotFound"
import Navbar from "./components/Navbar";

function App() {
  return (
     <>
        <Router>
            <Navbar/>
            <Home/>
            <About/>
            <Contact/>
            <Gallery/>
            <Plans/>
            <Trainer/>
            <NotFound/>
        </Router>
      
     </>   

  )
}

export default App