import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Demonstration from "./demonstration";
import Inputs from "./inputs";
import Footer from "./footer";
import Seat from "./seat";

export default function Seats(){
    const [seats, setSeats] = useState(null);
    const [order, setOrder] = useState([]);
    const [buyer, setBuyer] = useState({name: '', cpf: ''})

    const sessionId = useParams().sessionId;

    useEffect(() => (
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${sessionId}/seats`)
            .then((resp) => setSeats({...resp.data}))
    ), [])

    function teste(){
        console.log(buyer);
    }

    return(
        <div className='main-container'>
            <p className='title'>Selecione o(s) assento(s)</p>
            <AllSeats>
            {seats ? seats.seats.map( (seat) => (
                <Seat 
                key={seat.id} 
                seat={seat} 
                setOrder={setOrder}
                order={order}
                setBuyer={setBuyer}
                />
            ) )
            : <p>Carregando...</p>}
            </AllSeats>
            <Demonstration />
            <Inputs 
            buyer={buyer}
            setBuyer={setBuyer}
            order={order}
            />
            <Button onClick={teste}>Reservar assento(s)</Button>
            {seats ? <Footer movieData={seats.movie} session={seats} />
            : <p>Carregando...</p>}

            
        </div>
    );
}

const AllSeats = styled.ul`
    width: 350px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Button = styled.button`
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    color: white;
    border-radius: 3px;
    border: none;
    outline: none;
    font-size: 18px;
    margin: 45px 0 147px 0;
`