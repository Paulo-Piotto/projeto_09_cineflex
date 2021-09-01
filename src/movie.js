export default function Movie({movie}){
    return (
        <div className='movie-banner'>
            <img src={movie.img} alt='' />
        </div>
    );
}