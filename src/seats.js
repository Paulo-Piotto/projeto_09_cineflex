import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Demonstration from "./demonstration";
import Inputs from "./inputs";
import Footer from "./footer";
import Seat from "./seat";

export default function Seats(){
    const [selected, setSelected] = useState('free');
    const [seats, setSeats] = useState(null);
    const [buyer, setBuyer] = useState({});

    const sessionId = useParams().sessionId;

    useEffect(() => (
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${sessionId}/seats`)
            .then((resp) => setSeats({...resp.data}))
    ), [])

    // console.log(seats);

    return(
        <div className='main-container'>
            <p className='title'>Selecione o(s) assento(s)</p>
            <AllSeats>
            {seats ? seats.seats.map( (seat) => (
                <Seat seat={seat} />
            ) )
            : <p>Carregando...</p>}
            </AllSeats>
            <Demonstration />
            <Inputs />
            <Button>Reservar assento(s)</Button>
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

    li{
        width: 26px;
        height: 26px;
        border-radius: 12px;
        background-color: #C3CFD9;
        font-size: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #808F9D;
        margin: 6px 3px;
    }
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