import styled from 'styled-components';
import VIDEOPHREAK from '../../fonts/VIDEOPHREAK.ttf';

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

export const Wrap = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 2s ease-in-out;
    z-index: 9999;
    background-color: rgba(0,0,0,0.6);
    //Create a action to opac 0 to 1
    @font-face {
        font-family: "VIDEOPHREAK";
        src: local("VIDEOPHREAK"),
        url(${VIDEOPHREAK}) format("truetype");
        font-weight: bold;
    }
`;

export const Warning = styled.div`
    height: 300px;
    width: 500px;
    position: absolute;
    left: 50%;
    margin-left: -250px;
    top: 50%;
    margin-top: -150px;
    background-color: #1ea8e0;
    z-index: 9999;
    //display: flex;
    //justify-content: center;
`;

export const Text = styled.h2`
    font-family: 'VIDEOPHREAK';
    font-weight: bold;
    color: green;
    font-size: 3rem;
    margin-top: 30px;
    width: 100%;
    text-align:center;
`;

export const Button = styled.button`
    height: 60px;
    width: 160px;
    font-size: 1.5remm;
    padding: 3px;
    background-color: yellow;
    margin: 0 auto;
    margin-top: 100px;
    display: block;
    border-radius: 5px;
    border: 2px solid white;
`;