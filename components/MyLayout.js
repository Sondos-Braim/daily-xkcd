import Header from '../components/Header'


export default props => (
    <div>
        <Header />
        {props.children}
        <style jsx>{`
            
            padding: 100px;
            text-align: center;
            transition: 100ms ease-in background;
            background-color: floralwhite;

        `}</style>
    </div>
)