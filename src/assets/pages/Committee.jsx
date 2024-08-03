import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import '../stylesheets/committee.css';

function Committee() {
    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
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
        </Accordion>
    );
}

export default Committee;