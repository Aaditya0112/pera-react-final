import vhp1 from "../images/VH-2_i3.jpeg"
import vhp2 from "../images/VH1.jpg"
import hx from "../images/hall12.avif"
import h9 from "../images/Hall9.jpg"
import rat from "../images/RA_tower.jpg"

const Accomodation = () => {
    return(
        <>
        <ul className="list-disc">
            <li>
            <p> <span className="text-xl underline decoration-double font-bold">For Faculties/Industry Officials</span> : Accomodation is arranged at the Visitor's Hostel I and II.
                <div className="flex flex-col flex-wrap justify-center lg:flex-row h-fit w-full ">
                    <div className="img1 p-2 m-2"><img src= {vhp1} className="h-64 w-fit"/></div>
                    <div className="img1 p-2 m-2"><img src= {rat} className="h-64 w-fit"/></div><br/>
                    <div className="img2 p-2 m-2    "><img src= {vhp2} className="h-64 "/></div>
                </div>
            </p>
            </li>
            <li>
            <p> <span className="text-xl underline decoration-double font-bold">For Student Participants</span> : Accomodation is arranged at the Hall of Residences at IIT Kanpur</p>
            <div className="flex flex-col lg:flex-row w-full justify-evenly">
                    <div className="img1 p-2 m-2"><img src= {hx} className="h-64 w-fit"/></div>
                    <div className="img2 p-2 m-2    "><img src= {h9} className="h-64 "/></div>
                </div>
            </li>
        </ul>
        
        {/* images */}
        {/* images */}
        </>
        )
}

export default Accomodation;