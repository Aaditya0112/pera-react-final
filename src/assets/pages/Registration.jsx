import "../stylesheets/registration.css";

const Registration = () => {
    return(
        <>
            <div className="heading">
        <h1> Registration Fee Details </h1>
    </div>
    <div className="ratesTable">
        <table className="fixed_headers">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>With Accomodation</th>
                    <th>Without Accomodation </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>IEEE PES Student Members</td>
                    <td>&#8377; 2500</td>
                    <td>&#8377; 1500</td>
                </tr>
                <tr>
                    <td>Students Non-members</td>
                    <td>&#8377; 3000</td>
                    <td>&#8377; 2000</td>
                </tr>
                <tr>
                    <td>Faculty/Industry</td>
                    <td>&#8377; 10000 <br/><span class = "text-sm font-light">(Only 10 Seats Available)</span></td>
                    <td>&#8377; 5000</td>
                </tr>
                <tr>
                    <td>Special Category<br/>(Female IEEE PES Student)</td>
                    <td>&#8377; 1000</td>
                    <td>&#8377; 500</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div className="form">
        <a href = "https://forms.gle/Eqoe7Ua85c44UW4e7" target="_blank"> Click Here For Registration</a>
    </div>

    {/* <div className="heading">
        <h1> Registration Instructions </h1>
    </div> */}
    <script src="Registration.js"></script>
        </>
    )
}

export default Registration;