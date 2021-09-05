import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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

const Title = styled.p`
    width: 60%;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #247A6B;
    font-weight: bold;
    text-align: center;
`

const DataContainer = styled.div`
    width: 90vw;
    margin-bottom: 40px;
`

const SubTitle = styled.p`
    font-weight: bold;
    margin-bottom: 10px;

`

const Data = styled.p`
        margin-bottom: 8px;
        font-size: 22px;
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
    margin: 45px 0 60px 0;
`