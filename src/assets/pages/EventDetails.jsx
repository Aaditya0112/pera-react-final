import d1 from "../images/day-1 Pera (2).png"
import d2 from "../images/day-2 Pera (1).png"
import d3 from "../images/day-3 Pera.jpeg"

const EventDetails = () => {
    return (
        <div className="Schedule  align-center">
            <div className="mb-8 mt-5 flex flex-col items-center ">
                <h2 className="text-2xl text-white text-center font-bold mb-4 bg-gradient-to-l from-blue-500 to-red-100 p-2 w-full"> Day 1 </h2>
            </div>
            <div className="flex justify-center">
                <img src= {d1}  className = "h-4/5 w-2/5"alt ='DAY 1'/>
            </div>
            <div className="mb-8 mt-5 flex flex-col items-center ">
                <h2 className="text-2xl text-white text-center font-bold mb-4 bg-gradient-to-l from-blue-500 to-red-100 p-2 w-full"> Day 2 </h2>
            </div>
            <div className="flex justify-center ">
                <img src= {d2} className = "h-4/5 w-2/5"alt ='DAY 2'/>
            </div>
            <div className="mb-8 mt-5 flex flex-col items-center ">
                <h2 className="text-2xl text-white text-center font-bold mb-4 bg-gradient-to-l from-blue-500 to-red-100 p-2 w-full"> Day 3 </h2>
            </div>
            <div className="flex justify-center">
                <img src= {d3} className="h-4/5 w-2/5" alt ='DAY 3'/>
            </div>
        </div>
    );
}
export default EventDetails;