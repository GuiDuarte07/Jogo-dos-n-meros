import React from 'react'
import { Box, EmptyBox } from './style'

export default function GamePiece({ number }) {
    return (
        number !== 0 ? 
        <Box colorScame={number} >
            <span>{number}</span>
        </Box> :
        <EmptyBox />
    )
}
