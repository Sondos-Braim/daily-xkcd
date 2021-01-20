import styles from '../styles.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MyLayout from '../components/MyLayout'
export default function Home(props) {
  return (
        <MyLayout>
          <div className={styles.Home}>
            <p> XKCD </p>
            <p>{props.comics.safe_title}</p>
            <img src={props.comics.img}/>
            <Footer comics={props.comics}/>
            </div>
        </MyLayout>
  )
}

export async function getServerSideProps(){
    const response = await fetch('https://xkcd.com/2413/info.0.json');
    const jsonData  = await response.json();
    console.log(jsonData)
    return {props: {comics: jsonData}}
}