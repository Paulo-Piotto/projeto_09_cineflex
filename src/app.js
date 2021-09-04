import { BrowserRouter, Switch, Route } from "react-router-dom";
import MovieList from "./movieList";
import Header from  './header'
import MovieSessions from "./movieSessions";
import Seats from "./seats";


export default function App(){
    return(
        <BrowserRouter>
            <Header />

            <Switch>
                <Route path='/' exact>
                    <MovieList />
                </Route>

                <Route path='/sessions/:movieId' exact >
                    <MovieSessions />
                </Route>
                
                <Route path='/seats/:sessionId' exact >
                    <Seats />
                </Route>
            </Switch>
                
            

        </BrowserRouter>
       
    );
}
