// import styles from '../styles.module.css'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'


function Header(props){
    return(

  
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
  
            </Nav>
        </Navbar>


    )
}

export default Header;