import Speakers from '../components/Speakers.jsx';
import HoverCard from '../components/HoverCard.jsx';

import speaker from '../js/speaker.js';
import "../stylesheets/speaker.css"
const  SpeakersList = ()=>{
    return(<><div className="speakers">
            
            {Speakers.map((speaker, index) => {return(<HoverCard Data = {speaker} />);})}
    </div>
    <div className="infoBox w-10 h-10">
        <button className='popupClose'>x</button>
                
    </div>
    <div className="layer">

    </div>
    </>)
}

export default SpeakersList;