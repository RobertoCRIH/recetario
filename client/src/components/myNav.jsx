import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';



function MyNav({user}) {
  return (
    <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">Grandma's Kitchen</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Badge bg='primary'>Signed in as:</Badge> 
            <NavDropdown title={user}>
                <NavDropdown.Item><Button variant='danger' onClick={console.log('Logging Out')}>Log Out</Button></NavDropdown.Item>
            </NavDropdown>
          </Navbar.Text>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;