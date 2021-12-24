import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    cursor: pointer;
    background-color: ${(props) => {
        if (props.colorScame <= 4) return '#f1d7cf'
        if (props.colorScame <= 8) return '#b2dcd2'
        if (props.colorScame <= 12) return '#a8cde4'
        return '#fcf7f9'
    }};
    & > span {
        font-size: 2.5rem;
        font-weight: bold;
    }
`;

export const EmptyBox = styled.div`
    border: 1px solid black;
`;