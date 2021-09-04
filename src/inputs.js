import styled from "styled-components";

export default function Inputs(){
    return(
        <InputsContainer>
            <p>Nome do comprador:</p>
            <input type='text' placeholder='digite seu nome...'></input>

            <p>CPF do comprador:</p>
            <input type='text' placeholder='digite seu CPF...'></input>
        </InputsContainer>
    );
}

const InputsContainer = styled.div`
    margin-top: 42px;
    font-size: 16px;
    width: 90%;

    input{
        width: 100%;
        height: 51px;
        border: 1px solid #D4D4D4;
        border-radius: 3px;
        outline: none;
        padding: 10px;
        margin: 3px 0 13px 0;
        font-size: 16px;
    }

    input::placeholder{
        font-style: italic;
    }
`