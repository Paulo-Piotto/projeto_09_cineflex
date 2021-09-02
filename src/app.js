import { BrowserRouter, Switch, Route } from "react-router-dom";
import MovieList from "./movieList";
import Header from  './header'


export default function App(){
    return(
        <BrowserRouter>
            <Header />

            <MovieList />
            

        </BrowserRouter>
       
    );
}
