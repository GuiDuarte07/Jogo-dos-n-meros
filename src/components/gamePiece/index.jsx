import React from 'react';
import { Box } from './style';

export default function GamePiece({ number }) {
    return (
        <Box colorScame={number}>
            <span>{number}</span>
        </Box>
    )
}
