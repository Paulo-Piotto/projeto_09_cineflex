import { BrowserRouter, Switch, Route } from "react-router-dom";
import MovieList from "./movieList";
import Header from  './header'
import filme from './assets/image3.jpg'

const allMovies = [
    {
        img: filme,
    },
    {
        img: filme,
    },
    {
        img: filme,
    },
    {
        img: filme,
    },
    {
        img: filme,
    },
    {
        img: filme,
    },
    {
        img: filme,
    },
    {
        img: filme,
    },
    {
        img: filme,
    },
    {
        img: filme,
    }
];


export default function App(){
    return(
        <BrowserRouter>
            <Header />

            {/* <MovieList allMovies={allMovies} /> */}

        </BrowserRouter>
       
    );
}
