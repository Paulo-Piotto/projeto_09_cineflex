import styled from "styled-components";

export default function Demonstration(){
    return(
        <DemonstrationContainer>
                <Demo color='#8DD7CF'>
                    <div></div>
                    <p>Selecionado</p>
                </Demo>
                <Demo color='#C3CFD9'>
                    <div></div>
                    <p>Disponível</p>
                </Demo>
                <Demo color='#FBE192'>
                    <div></div>
                    <p>Indisponível</p>
                </Demo>
            </DemonstrationContainer>
    );
}

const DemonstrationContainer = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 13px;
`

const Demo = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 16px;

    div{
        width: 24px;
        height: 24px;
        border-radius: 17px;
        background-color: ${(props) => props.color};
        margin-bottom: 5px;
    }
`