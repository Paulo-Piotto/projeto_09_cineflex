import styled from "styled-components";
import { useState } from "react";

export default function Seat({seat, setOrder, order, chairs, setChairs, setBuyer}){

    const [selected, setSelected] = useState('free');

    function selectChair(){
        if(seat.isAvailable === true){
            if(selected === 'free'){
                setSelected('selected');
                setOrder(() => ([...order, seat.id]))
                setChairs(() => ([...chairs, seat.name]))
                setBuyer({name: '', cpf: ''});
            }else {
                setSelected('free');
                setOrder(order.filter((el) => 
                el === seat.id ? false : true))
                setChairs(chairs.filter((el) => 
                el === seat.name ? false : true))
                setBuyer({name: '', cpf: ''});
            }
        }else{
            alert('Esse assento não está disponível!')
        }
    }

    return(
        <Chair 
        onClick={selectChair}
        selected={selected}
        available={seat.isAvailable}
        >{seat.name}</Chair>
    );
}

const Chair = styled.li`
    
        width: 26px;
        height: 26px;
        border-radius: 12px;
        background-color: ${ (props) =>
            props.available === false ? '#FBE192' :
            props.selected === 'selected' ? '#8DD7CF' : '#C3CFD9'            
        };
        font-size: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #808F9D;
        margin: 6px 3px;
`