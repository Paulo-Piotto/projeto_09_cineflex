import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Demonstration from "./demonstration";
import Inputs from "./inputs";
import Footer from "./footer";
import Seat from "./seat";
import OrderButton from "./orderButton";

export default function Seats({buyer, setBuyer, chairs, setChairs}){
    const [seats, setSeats] = useState(null);
    const [order, setOrder] = useState([]);
    

    const sessionId = useParams().sessionId;
    const [link, setLink] = useState(`/seats/${sessionId}`)

    useEffect(() => (
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${sessionId}/seats`)
            .then((resp) => setSeats({...resp.data}))
    ), [])
    

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
                chairs={chairs}
                setChairs={setChairs}
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
            link={link}
            setLink={setLink}
            sessionId={sessionId}
            />

            <OrderButton buyer={buyer} sessionId={sessionId} setBuyer={setBuyer} chairs={chairs} />
            
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