import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function OrderButton({buyer, sessionId, setBuyer, chairs}){
    const canOrder = verifyOrder(buyer, setBuyer, chairs);

    function finish(){
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many', buyer);
    }


    return (
        <Link to={canOrder ? `/finished/${sessionId}` : `/seats/${sessionId}`}>
            <Button onClick={finish}>Reservar assento(s)</Button>
        </Link>
    );
}


function verifyOrder(buyer){
    if(buyer.name.length > 0 && buyer.cpf.length > 0 && buyer.ids.length > 0){
        return true;
    }else{
        return false;
    }
}

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