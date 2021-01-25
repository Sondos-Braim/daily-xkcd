import MyLayout from '../../components/MyLayout'
import Footer from '../../components/Footer'

export default function UserDetails(props){
    return(
        <MyLayout>
            <h2>{props.comic.safe_title}</h2>
            <img src={props.comic.img}/>
            <Footer comic={props.comic}/>

        </MyLayout>
    )
}

export async function getServerSideProps(context){
    const id = context.query.num;
    const response = await fetch(`https://xkcd.com/${id}/info.0.json`);
    const jsonData  = await response.json();
    return {props: {comic: jsonData}}
}
