import React, { useEffect, useRef } from 'react';
import { Box } from './style';

export default function DragPiece({ number }) {
    const ref = useRef();

    useEffect(() => {
        //ref.current.addEventListener();
    }, [])

    return (
        <Box ref={ref} colorScame={number}>
            <span>{number}</span>
        </Box>
    )
}
