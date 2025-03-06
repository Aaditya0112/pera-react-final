import { Contacts } from "../../Constants.js";

const Contact = () => {
    return (
        <div className="text-center">
            <span className="heading ">
            <h1>Contact Us</h1></span>
            {/* <h3>Email: <a href="mailto:pera2024.iitk@gmail.com" className="no-underline"> pera2024.iitk@gmail.com</a></h3> */}
            <p>For more information or any queries, please contact us at:</p>
            {
                Contacts.map((e) => {
                    return(<h3>{e.title}: <span className="text-blue-600">{e.contact}</span></h3>)
                })
            }
        </div>
)}

export default Contact;