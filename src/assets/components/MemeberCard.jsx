import gmv from '../images/gmv_sir.webp';
import "../stylesheets/memberCard.css";
function MemberCard({name, designation, emailId}) {
    return (
        <div className="member-card flex flex-col items-center justify-center rounded-xl w-3/5 lg:flex-row shadow-xl p-1 m-25">
            <div className="line flex member-card__image h-56 w-56 lg:mr-6 rounded-full border-8" >
                <img src={gmv}/>
            </div>
            <div className="member-card__info text-center">
                <h2>Dr. Guru Raj <i style={{fontSize : '24px'}} class="fa">&#xf08c;</i></h2>
                <div className="designation font-bold text-xl cyan-400">
                    Assistant Professor, IIT Kanpur
                </div>
                <p className="mailId">
                    gururajmv@iitk.ac.in
                </p>
            </div>

        </div>
    )
}

export default MemberCard;