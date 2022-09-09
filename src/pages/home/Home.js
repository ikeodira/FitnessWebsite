import MainHeader from "../../components/MainHeader"
import "./Home.css"
import Programs from "../../components/Programs";
import Values from "../../components/Values";
import FAQs from "../../components/FAQs";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
        <MainHeader/>  
        <Programs/>
        <Values/> 
        <FAQs/> 
        <Testimonials/> 
        <Footer/>     
    </>     
  )
}

export default Home