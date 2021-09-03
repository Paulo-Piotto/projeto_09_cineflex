export default function Footer({movieData}){

    return (
        <footer>
            <div className='footer-banner'>
                <img src={movieData.posterURL} alt='' />                
            </div>
            <p>{movieData.title}</p>
        </footer>
    );
}