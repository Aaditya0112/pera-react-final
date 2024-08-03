import Speakers from '../components/Speakers.jsx';
import HoverCard from '../components/HoverCard.jsx';
import "../stylesheets/speaker.css"
const  SpeakersList = ()=>{
    return(<div className="speakers">
            {Speakers.map((speaker, index) => {return(<HoverCard Data = {speaker} />);})}
    </div>)
}

export default SpeakersList;