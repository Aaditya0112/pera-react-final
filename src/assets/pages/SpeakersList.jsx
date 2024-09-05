import Speakers from '../components/Speakers.jsx';
import HoverCard from '../components/HoverCard.jsx';
import scs from "../images/Members/Committee/SC-srivastava.jpg"

import speaker from '../js/speaker.js';
import "../stylesheets/speaker.css"
const SpeakersList = () => {
    let bio = "S. C. Srivastava received the Ph.D. degree in electrical engineering from the Indian Institute of Technology Delhi, New Delhi, India, in 1987.,He was a Professor with the Department of Electrical Engineering, Indian Institute of Technology Kanpur, Kanpur, India, till 2020, and is currently continuing as the Director of IIT Kanpur-LaTrobe University Research Academy and a Distinguished Visiting Professor. His research interests include power system stability and security analysis, synchrophasor applications, power system restructuring and ac/dc microgrids, and smart grids."
    return (<>
        <div className="keySpeaker flex justify-center ">

            <div className="member-card text-white  w-4/5 flex flex-col lg:flex-row bg-gradient-to-br from-purple-400 to-blue-100  lg:w-3/5 items-center justify-evenly rounded-xl  lg:flex-col  shadow-xl m-8 ">
                
                <div className="title text-pink-500 font-bold text-center py-3 w-full text-4xl mb-4 rounded">
                    Keynote Speaker
                </div>
                
                <div className="content flex p-2 flex-col lg:flex-row w-full justify-around items-center">
                    <div className="line flex  member-card__image h- w-56 lg:mr-6 mb-3 "  >
                        <img src={scs} alt="Dr. S C Srivastava" className='rounded'/>

                    </div>
                    <div className="member-card__info text-center align-middle">
                        <h2>Prof. S C Srivastava </h2>
                        <div className="designation  text-xl  align-middle">
                            <h3 className=' text-lg leading-6'>Former Director, IIT Kanpur-La Trobe University Research Academy <br/> & <br />
                                Distinguished Visiting Professor</h3>
                            <p>Department of Electrical Engineering <br/>Indian Institute of Technology, Kanpur</p>


                        </div>
                        <button className='hoverBlack m-1 px-3 py-1 rounded border-2 border-purple-500 text-red w-fit text-purple-500' onClick ={() => {
            document.querySelector('.infoBox').style.display = 'block';
            document.querySelector('.layer').classList.toggle('activeL');
            // document.querySelector('.infoBox').setAttribute('id', `${id}`);
            document.querySelector('.popupContent').innerHTML = `
            <h2>About Speaker</h2>
            <p>${bio}</p>`;

          }} > About</button>
                    </div>
                </div>

            </div>
        </div>
        <div className="speakers">

            {Speakers.map((speaker, index) => { return (<HoverCard Data={speaker} />); })}
        </div>
        <div className="infoBox w-52 h-fit fixed text-lg">
            <div className="popupContent">
                <h2>About Speaker</h2>
            </div>
            <button className='popupClose' onClick={() => {
                document.querySelector('.layer').classList.remove('activeL');
                document.querySelector('.infoBox').removeAttribute('id');
                document.querySelector('.popupContent').innerHTML = '';
                document.querySelector('.infoBox').style.display = 'none';
            }}>&#10006;</button>

        </div>
        <div className="layer">

        </div>
    </>)
}

export default SpeakersList;