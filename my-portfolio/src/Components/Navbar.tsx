import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation (){
    return(
        <Navbar>
            <Nav.Link className="title" href="#home">Home</Nav.Link>
        </Navbar>
    )
}
export default Navigation