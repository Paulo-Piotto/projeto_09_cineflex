import styled from 'styled-components';

const Title = styled.p`
    width: 60%;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #247A6B;
    font-weight: bold;
    text-align: center;
`;

const DataContainer = styled.div`
    width: 90vw;
    margin-bottom: 40px;
`;

const SubTitle = styled.p`
    font-weight: bold;
    margin-bottom: 10px;

`;

const Data = styled.p`
        margin-bottom: 8px;
        font-size: 22px;
`;

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
`;

export {
  Title,
  DataContainer,
  SubTitle,
  Data,
  Button,
};
