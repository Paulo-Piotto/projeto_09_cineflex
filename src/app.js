import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import MovieList from './components/movieList';
import Header from './components/header';
import MovieSessions from './components/movieSessions';
import Seats from './components/seats';
import Order from './components/order';

export default function App() {
  const [buyer, setBuyer] = useState({ name: '', cpf: '' });
  const [chairs, setChairs] = useState([]);

  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/sessions/:movieId" exact>
          <MovieSessions />
        </Route>

        <Route path="/seats/:sessionId" exact>
          <Seats
            buyer={buyer}
            setBuyer={setBuyer}
            chairs={chairs}
            setChairs={setChairs}
          />
        </Route>

        <Route path="/finished/:sessionId" exact>
          <Order
            buyer={buyer}
            chairs={chairs}
            setBuyer={setBuyer}
            setChairs={setChairs}
          />
        </Route>
      </Switch>

    </BrowserRouter>

  );
}
