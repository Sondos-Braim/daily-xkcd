import styles from '../styles.module.css'
import Link from 'next/link'

function Footer(props){
    let comicsNums = [];
    let nums = props.comics.num; 
    for(let i = 0; i<10; i++){
        comicsNums.push(nums-i)
    }
    return(
        <footer className={styles.footer}>
            <p>Previous 10</p>
            <ul>
                {comicsNums.map( (comic) =>
                    <Link key={comic} href="/comics/[id].js" as={`/comics/${comic}` }>
                        <a className={styles.a}>#{comic}</a>
                    </Link>
                )}
            </ul>
            <small>@copyright ASAC</small>
        </footer>
    )
}
export default Footer;