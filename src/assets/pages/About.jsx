import img from "../images/slide2.jpg";
import "../stylesheets/About.css";
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
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, hic quisquam esse labore suscipit eum ducimus tempora natus reprehenderit autem id fugit quod placeat aliquam nesciunt perspiciatis possimus libero rem?</p>
                    </div>

                </div>

                <div className="about-EE">
                    <div className="aboutt">
                        <h1 className="text-center">Department of Electrical Engineering</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, hic quisquam esse labore suscipit eum ducimus tempora natus reprehenderit autem id fugit quod placeat aliquam nesciunt perspiciatis possimus libero rem?</p>
                    </div>
                    <div className="img">
                        <img src={img} alt="IITK" />
                    </div>
                </div>

                <div className="reach-IITK">
                    <div className="aboutt">
                        <h1 className="text-center">How to Reach IITK</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, hic quisquam esse labore suscipit eum ducimus tempora natus reprehenderit autem id fugit quod placeat aliquam nesciunt perspiciatis possimus libero rem?</p>
                    </div>
                </div>
            </div>

            

        </>

    )
}

export default About;