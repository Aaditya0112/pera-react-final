import Speakers from '../components/Speakers.jsx';
import HoverCard from '../components/HoverCard.jsx';

import speaker from '../js/speaker.js';
import "../stylesheets/speaker.css"
const  SpeakersList = ()=>{
    return(<><div className="speakers">
            
            {Speakers.map((speaker, index) => {return(<HoverCard Data = {speaker} />);})}
    </div>
    <div className="infoBox w-52 h-fit fixed">
        <div className="popupContent">

        </div>
        <button className='popupClose' onClick={() => {
            document.querySelector('.layer').classList.remove('activeL');
            document.querySelector('.infoBox').removeAttribute('id');
            document.querySelector('.popupContent').innerHTML = '';
            document.querySelector('.infoBox').style.display = 'none';
        }}>x</button>
                
    </div>
    <div className="layer">

    </div>
    </>)
}

export default SpeakersList;