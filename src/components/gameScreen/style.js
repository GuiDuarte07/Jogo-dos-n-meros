import styled from 'styled-components'

export const Template = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    border: 25px solid black;
    outline: 8px outset rgb(224, 224, 224);
`;

export const GameBox = styled.div`
    width: 500px;
    height: 500px;
    border: 10px inset #393939;
    //outline: 10px outset rgb(250, 244, 244);
    background-color: #FFF;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
`;