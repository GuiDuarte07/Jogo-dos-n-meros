import React, { useRef } from 'react';
import { EmptyBox } from './style';

export default function DropPiece() {
    const ref = useRef();

    return <EmptyBox ref={ref} />
}
