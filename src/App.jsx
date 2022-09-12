import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Gallery from "./pages/gallery/Gallery"
import Plans from "./pages/plans/Plans"
import Trainer from "./pages/trainers/Trainer"
import NotFound from "./pages/notFound/NotFound"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

function App() {
  return (
     <>
        <Router>
            <Navbar/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/plans" element={<Plans/>}/>
                <Route path="/trainers" element={<Trainer/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </Router>
      
     </>   

  )
}

export default App