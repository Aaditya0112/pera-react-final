import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import '../stylesheets/committee.css';

function Committee() {
    return (
        <>
        <div className="currentMemberBox">
            <h1 className='text-center h-52'>Current Members</h1>
        </div>

        {/* // <Accordion defaultActiveKey={['0']} > */}
        <Accordion  >
            <Accordion.Item eventKey="1">
                <Accordion.Header>Executive Committee 2023 Members</Accordion.Header>
                <Accordion.Body>


                    <table>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Member</th>
                            <th>Committee/Post</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Dr. Alok Ranjan Verma<br />(Assistant Professor, IIT Kanpur)</td>
                            <td>Faculty Advisor</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Atul Kumar Soni</td>
                            <td>Immediate Past<br />Chairperson</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Sunil Kumar Maurya</td>
                            <td>Chairperson</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Shubham Verma</td>
                            <td>Vice-Chairperson</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Diksha Singh</td>
                            <td>Secretary</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Jitender Kumar Mahawar</td>
                            <td>Treasurer</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Swastik Sharma</td>
                            <td>Webmaster</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Mukesh Maurya</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Girraj Raigar</td>
                            <td>Social Media Convenor</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Sayantan Chatterjee</td>
                            <td>Newsletter</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Nivedita Singh</td>
                            <td>Woman in Power</td>
                        </tr>
                    </table>


                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>Executive Committee 2022 Members</Accordion.Header>
                <Accordion.Body>

                    <table>
                        <tr>
                            <th>S.No.</th>
                            <th>Member</th>
                            <th>Committee/Post</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Dr. Alok Ranjan Verma<br />(Assistant Professor, IIT Kanpur)</td>
                            <td>Branch Chapter Advisor</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Akhilesh Prakash Gupta</td>
                            <td>Immediate Past Chair</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Atul Kumar Soni</td>
                            <td>Chairperson</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Viresh Patel</td>
                            <td>Vice Chair</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Kingshuk Chatterjee</td>
                            <td>Secretary</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Himanshu Gupta</td>
                            <td>Treasurer</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Sunil Kumar Maurya</td>
                            <td>Webmaster</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Darshan Prakash Borthakur</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Jitendar Kumar Mahawar</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Aastha Kapoor</td>
                            <td>Social Media</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Ashok Narayan Tripathi</td>
                            <td>Newsletter</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Pratyasha Das</td>
                            <td>Women in Power</td>
                        </tr>
                    </table>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Executive Committee 2021 Members</Accordion.Header>
                <Accordion.Body>
                    <table>
                        <tr>
                            <th>S.No.</th>
                            <th>Member</th>
                            <th>Committee/Post Name</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Dr. Ankush Sharma<br />(Associate Professor, IIT Kanpur)</td>
                            <td>Branch Chapter Advisor</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Akhilesh Prakash Gupta</td>
                            <td>Chairperson</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Ankit Yadav</td>
                            <td>Immediate Past Chair</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Avinash Kumar</td>
                            <td>Vice-chair</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Atul Kumar Soni</td>
                            <td>Secretary</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Viresh Patel</td>
                            <td>Treasurer</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Himanshu Gupta</td>
                            <td>Web Master</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Amrendra Kumar</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Chaman Lal Dewangan</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Arindam Mitra</td>
                            <td>Social Media and Newsletter</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Kingshuk Chatterjee</td>
                            <td>Social Media and Newsletter</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Anamika Tiwari</td>
                            <td>Women in Power</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Aastha Kapoor</td>
                            <td>Women in Power</td>
                        </tr>
                    </table>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Executive Committee 2020 Members</Accordion.Header>
                <Accordion.Body>
                    <table>
                        <tr>
                            <th>S.No.</th>
                            <th>Member</th>
                            <th>Committee/Post Name</th>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>Dr. Ankush Sharma<br />(Associate Professor, IIT Kanpur)</td>
                            <td>Branch Chapter Advisor</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Ankit Yadav</td>
                            <td>Chairperson</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>J. G. Sreenath</td>
                            <td>Immediate Past Chair</td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>Akhilesh Prakash Gupta</td>
                            <td>Vice-chair</td>
                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>Avinash Kumar</td>
                            <td>Secretary</td>
                        </tr>
                        <tr>
                            <td>6.</td>
                            <td>Rajarshi Dutta</td>
                            <td>Treasurer</td>
                        </tr>
                        <tr>
                            <td>7.</td>
                            <td>Atul Kumar Soni</td>
                            <td>Web Master</td>
                        </tr>
                        <tr>
                            <td>8.</td>
                            <td>Chaman Lal Dewangan</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>9.</td>
                            <td>Viresh Patel</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>10.</td>
                            <td>Arindam Mitra</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>11.</td>
                            <td>Aastha Kapoor</td>
                            <td>Social Media Convenor</td>
                        </tr>
                        <tr>
                            <td>12.</td>
                            <td>Asha Sharma</td>
                            <td>WiP Convenor</td>
                        </tr>
                        <tr>
                            <td>13.</td>
                            <td>Gaurav Khare</td>
                            <td>Membership Convenor</td>
                        </tr>
                        <tr>
                            <td>14.</td>
                            <td>Bandi Ravi Kumar</td>
                            <td>Newsletter Convenor</td>
                        </tr>
                    </table>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>Executive Committee 2019 Members</Accordion.Header>
                <Accordion.Body>
                    <table>
                        <tr>
                            <th>S.No.</th>
                            <th>Member</th>
                            <th>Committee/Post Name</th>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>Dr. Sandeep Anand<br/>(Assistant Professor, IIT Kanpur)</td>
                            <td>Branch Chapter Advisor</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>J G Sreenath</td>
                            <td>Chairperson</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Vineeth V</td>
                            <td>Immediate Past Chair</td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>Ankit Yadav</td>
                            <td>Vice-chair</td>
                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>Saurabh Kesharwani</td>
                            <td>Secretary</td>
                        </tr>
                        <tr>
                            <td>6.</td>
                            <td>Akhilesh Prakash Gupta</td>
                            <td>Treasurer</td>
                        </tr>
                        <tr>
                            <td>7.</td>
                            <td>Priyanka Gangwar</td>
                            <td>Web Master</td>
                        </tr>
                        <tr>
                            <td>8.</td>
                            <td>Bandopant Pawar</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>9.</td>
                            <td>Rajarshi Dutta</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>10.</td>
                            <td>Avinash Kumar</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>11.</td>
                            <td>Aastha Kapoor</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>12.</td>
                            <td>Asha Sharma</td>
                            <td>WiP Volunteer</td>
                        </tr>
                        <tr>
                            <td>13.</td>
                            <td>P Naga Yasasvi</td>
                            <td>Membership Committee</td>
                        </tr>
                        <tr>
                            <td>14.</td>
                            <td>Arindam Mitra</td>
                            <td>Membership Committee</td>
                        </tr>
                    </table>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </>
        
    );
}

export default Committee;