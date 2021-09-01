import Movie from "./movie";

export default function MovieList({allMovies}){
    return(
        <div className='movie-list'>
            <p className='title'>Selecione o filme</p>
            <section className='movies'>
                {allMovies.map((movie, index) => <Movie movie={movie} key={index} />)}
            </section>
        </div>
    );
}