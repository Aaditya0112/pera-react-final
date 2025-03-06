import Speakers, {MainSpeaker} from '../components/Speakers.jsx';
import HoverCard from '../components/HoverCard.jsx';

import Panelist from '../components/Panelist.jsx';
import "../stylesheets/speaker.css"
const SpeakersList = () => {

    return (<>
        <div className="keySpeaker flex justify-center ">

            <div className="member-card text-white  w-4/5 flex flex-col lg:flex-row bg-gradient-to-br from-purple-400 to-blue-100  lg:w-3/5 items-center justify-evenly rounded-xl  lg:flex-col  shadow-xl m-8 ">
                
                <div className="title text-pink-500 font-bold text-center py-3 w-full text-4xl mb-4 rounded">
                    Keynote Speaker
                </div>
                
                <div className="content flex p-2 flex-col lg:flex-row w-full justify-around items-center">
                    <div className="line flex  member-card__image h- w-56 lg:mr-6 mb-3 "  >
                        <img src={MainSpeaker.imageSrc} alt= {MainSpeaker.title} className='rounded'/>

                    </div>
                    <div className="member-card__info text-center align-middle">
                        <h2>{MainSpeaker.title} </h2>
                        <div className="designation  text-xl  align-middle">
                            <h3 className=' text-lg leading-6' dangerouslySetInnerHTML={{__html : MainSpeaker.description}}></h3>
                            {/* <p>Department of Electrical Engineering <br/>Indian Institute of Technology Kanpur</p> */}


                        </div>
                        <button className='hoverBlack m-1 px-3 py-1 rounded border-2 border-purple-500 text-red w-fit text-purple-500' onClick ={() => {
            document.querySelector('.infoBox').style.display = 'block';
            document.querySelector('.layer').classList.toggle('activeL');
            // document.querySelector('.infoBox').setAttribute('id', `${id}`);
            document.querySelector('.popupContent').innerHTML = `
            <h2>About Speaker</h2>
            <p>${MainSpeaker.bio}</p>`;

          }} > About</button>
                    </div>
                </div>

            </div>
        </div>
        <div className="mb-8 mt-5 flex flex-col items-center ">
                <h2 className="text-2xl text-white text-center font-bold mb-4 bg-gradient-to-l from-blue-500 to-red-100 p-2 w-full">Technical Speakers</h2>
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
        <div className="mb-8 mt-5 flex flex-col items-center ">
                <h2 className="text-2xl text-white text-center font-bold mb-4 bg-gradient-to-l from-blue-500 to-red-100 p-2 w-full">Panel Discussion </h2>


            </div>
            <div className="speakers">
                {
                Panelist.panelist.map((speaker, index) => { 
                    return (<HoverCard Data={speaker} />);})}
                {
                    
                }
                
                </div>

                {/* <div className="mb-8 mt-5 flex flex-col items-center ">
                <h2 className="text-2xl text-white text-center font-bold mb-4 bg-gradient-to-l from-blue-500 to-red-100 p-2 w-full">Industry Super Session </h2>


            </div>
            <div className="speakers">
                {
                Panelist.superSession.map((speaker, index) => { 
                    return (<HoverCard Data={speaker} display = 'none' />);})}
                {
                    
                }
                
                </div> */}
        <div className="layer">

        </div>
    </>)
}

export default SpeakersList;