import styled from "styled-components";

export default function Inputs({buyer, setBuyer, order}){

    function buyerData(event){
        if(buyer.ids){
            if(event.target.name === 'name'){
                setBuyer(() => ({...buyer, name: event.target.value}
                ));
            }else {
                setBuyer({...buyer, cpf: event.target.value});
            }
        }else{
            if(event.target.name === 'name'){
                setBuyer({...buyer, ids: order, name: event.target.value});
            }else {
                setBuyer({...buyer, ids: order, cpf: event.target.value});
            }
        }
    }

    return(
        <InputsContainer>
            <p>Nome do comprador:</p>
            <input value={buyer.name} name='name' onChange={buyerData} type='text' placeholder='digite seu nome...'></input>

            <p>CPF do comprador:</p>
            <input value={buyer.cpf} name='cpf' onChange={buyerData} type='text' placeholder='digite seu CPF...'></input>
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