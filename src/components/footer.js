export default function Footer({movieData, session}){

    return (
        <footer>
            <div className='footer-banner'>
                <img src={movieData.posterURL} alt='' />                
            </div>
            <div>
                <p>{movieData.title}</p>
                {session ? <p>{session.day.weekday} - {session.name}</p>
                : <p></p>}
                
            </div>
        </footer>
    );
}