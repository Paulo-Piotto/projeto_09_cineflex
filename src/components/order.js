import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataContainer, Data, Button, Title, SubTitle } from "../styles/orderStyles";

export default function Order({buyer, chairs, setBuyer, setChairs}){
    const sessionId = useParams().sessionId;
    const [session, setSession] = useState(null);

    useEffect(() => (
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${sessionId}/seats`)
            .then((resp) => setSession({...resp.data}))
    ), [])

        function voltarHome(){
            setBuyer({name: '', cpf: ''})
            setChairs([]);
        }


    return(
        <div className='main-container'>
            <Title>Pedido efetuado com sucesso!</Title>
            {session ?
            <div>
            <DataContainer>
                    <SubTitle>Filme e sessão</SubTitle>
                    <Data>{session.movie.title}</Data>
                    <Data>{session.day.date} {session.name}</Data>
            </DataContainer>

            <DataContainer>
                    <SubTitle>Ingressos</SubTitle>
                    {chairs.map((chair, index) => 
                    <Data key={index}>Assento {chair}</Data>)}
            </DataContainer>

            <DataContainer>
                    <SubTitle>Comprador</SubTitle>
                    <Data>Nome: {buyer.name}</Data>
                    <Data>CPF: {buyer.cpf}</Data>
            </DataContainer>
            </div>
            : <Data>Carregando...</Data>
            }
            <Link to='/'>
                <Button onClick={voltarHome}>Voltar para a Home</Button>  
            </Link>
               
        </div>
    );
}