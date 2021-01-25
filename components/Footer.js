import styles from '../styles.module.css'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer(props){
    let comicsNums = [];
    let num = props.comic.num; 
    for(let i = 1; i<=10; i++){
        comicsNums.push(num-i)
    }
    return(

          <footer className={styles.footer}>  
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">

                {comicsNums.map( (num) =>
              
                    <Link key={num} href="/comics/[num].js" as={`/comics/${num}` }>
                    <a className={styles.a}>#{num}</a>
                    </Link>
                   
                )}
  
            </Nav>
        </Navbar>
        </footer> )}

export default Footer;
