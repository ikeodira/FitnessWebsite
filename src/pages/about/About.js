import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import "./about.css";

function About() {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestias tempora quasi illum perferendis repellat sunt libero magni maxime incidunt?
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story .."/>
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo excepturi ratione ab ex aliquam facere, aliquid dolor corporis ipsam quas dolorum modi numquam. Rerum reiciendis qui culpa repudiandae ipsa. Eum inventore quibusdam optio voluptates repellat beatae quod ea doloribus laborum.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo excepturi ratione ab ex aliquam facere, aliquid dolor corporis ipsam quas dolorum modi numquam. Rerum reiciendis qui culpa repudiandae ipsa. Eum inventore quibusdam optio voluptates repellat beatae quod ea doloribus laborum.</p>
          </div>
        </div>
      </section>
    </>    
  )
}


export default About