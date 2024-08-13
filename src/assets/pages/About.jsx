import img from "../images/slide2.jpg";
import "../stylesheets/About.css";
import sbc from "../images/SBC.jpg";
const About = () => {
    return (
        <>
            <div className="heading purple">
                <h1>About Us</h1>
            </div>
            <div className="about">
                <div className="about-IITK">
                    <div className="img">
                        <img src={img} alt="IITK" />
                    </div>
                    <div className="aboutt">
                        <h1 className="text-center">Indian Institute of Technology Kanpur</h1>
                        <p className="text-center">IIT Kanpur is a premier government-funded institution for higher technical education in India. Consistently ranked amongst the top 5 engineering institutes in India over past several decades. IIT Kanpur offers courses in sciences, engineering, humanities and management. At IIT Kanpur, there is a strong emphasis on research in all our academic programs and we also have several specialized centers for research into various focus areas. Many of our alumni are leaders in academia and industry around the globe. The sprawling IIT Kanpur campus is located in the industrial city of Kanpur, only a few hours away from New Delhi, the Capital of India.</p>
                    </div>

                </div>

                <div className="about-EE">
                    <div className="aboutt">
                        <h1 className="text-center">Department of Electrical Engineering</h1>
                        <p className="text-center"></p>
                    </div>
                    <div className="img">
                        <img src={img} alt="IITK" />
                    </div>
                </div>
                <div className="about-IITK SBC">
                    <div className="img w-full lg:h-1/2 w-3/5">
                        <img src={sbc} alt="PES SBC" />
                    </div>
                    <div className="aboutt">
                        <h1 className="text-center">PES Student Branch Chapter @IITK</h1>
                        <p className="text-center"></p>
                        <p></p>
                    </div>

                </div>

                <div className="reach-IITK justify-center">
                    <div className="aboutt">
                        <h1 className="text-center">How to Reach IITK</h1>
                        <p></p>
                    </div>
                </div>
            </div>

            

        </>

    )
}

export default About;