import React, { useEffect, useRef } from 'react';
import { Box } from './style';

export default function DragPiece({ drag, number }) {
    const ref = useRef();
    const initialXY = useRef([]);
    console.log('rending')

    useEffect(() => {
        ref.current.ondragstart = function() {
            return false;
        };

        ref.current.onmousedown = function(event) {
            event.preventDefault(); // prevent selection start (browser action)
            switch (drag) {
                case 'LEFT':
                    let left_shiftX = event.clientX //- ref.current.getBoundingClientRect().left;
                    // shiftY not needed, the thumb moves only horizontally

                    document.addEventListener('mousemove', left_onMouseMove);
                    document.addEventListener('mouseup', left_onMouseUp);
            
                    function left_onMouseMove(event) {
                        let newLeft = event.clientX - left_shiftX //- ref.current.getBoundingClientRect().left;
                        //console.log(newLeft);
                
                        // the pointer is out of slider => lock the thumb within the bounaries
                        if (newLeft < 0) {
                            newLeft = 0;
                        }
                        let rightEdge = ref.current.offsetWidth;
                        if (newLeft > rightEdge) {
                            newLeft = rightEdge;
                        }
                
                        ref.current.style.left = newLeft + 'px';
                    }

                    function left_onMouseUp() {
                        document.removeEventListener('mouseup', left_onMouseUp);
                        document.removeEventListener('mousemove', left_onMouseMove);
                    }
                break;
                case 'TOP':
                    let top_shiftY = event.clientY
                    // shiftX not needed, the thumb moves only horizontally

                    document.addEventListener('mousemove', top_onMouseMove);
                    document.addEventListener('mouseup', top_onMouseUp);

                    function top_onMouseMove(event) {
                        let newTop = top_shiftY - event.clientY //+ ref.current.getBoundingClientRect().left;
                
                        // the pointer is out of slider => lock the thumb within the bounaries
                        if (newTop > 0) {
                            newTop = 0;
                        }
                        
                        let bottomEdge = ref.current.offsetHeight;
                        if (newTop < -bottomEdge) {
                            newTop = -bottomEdge;
                        }
                       
                        ref.current.style.bottom = newTop + 'px';
                    }
                    function top_onMouseUp() {
                        document.removeEventListener('mouseup', top_onMouseUp);
                        document.removeEventListener('mousemove', top_onMouseMove);
                    }

                    break;
                case 'RIGHT':
                    let right_shiftX = event.clientX //- ref.current.getBoundingClientRect().left;
                    // shiftY not needed, the thumb moves only horizontally

                    document.addEventListener('mousemove', right_onMouseMove);
                    document.addEventListener('mouseup', right_onMouseUp);

                    function right_onMouseMove(event) {
                        let newRight = event.clientX - right_shiftX //- ref.current.getBoundingClientRect().left;
                        //console.log(newRight);
                
                        // the pointer is out of slider => lock the thumb within the bounaries
                        if (newRight > 0) {
                            newRight = 0;
                        }
                        let rightEdge = -ref.current.offsetWidth;
                        console.log(rightEdge, newRight)
                        if (newRight < rightEdge) {
                            newRight = rightEdge;
                        }
                
                        ref.current.style.left = newRight + 'px';
                    }

                    function right_onMouseUp() {
                        document.removeEventListener('mouseup', right_onMouseUp);
                        document.removeEventListener('mousemove', right_onMouseMove);
                    }

                    break;
                case 'BOTTOM':
                    let bottom_shiftY = event.clientY
                    // shiftX not needed, the thumb moves only horizontally

                    document.addEventListener('mousemove', bottom_onMouseMove);
                    document.addEventListener('mouseup', bottom_onMouseUp);

                    function bottom_onMouseMove(event) {
                        let newTop = -bottom_shiftY + event.clientY //+ ref.current.getBoundingClientRect().left;
                
                        // the pointer is out of slider => lock the thumb within the bounaries
                        if (newTop > 0) {
                            newTop = 0;
                        }
                        let bottomEdge = ref.current.offsetHeight;
                        console.log(bottomEdge,newTop)
                        if (newTop < -bottomEdge) {
                            newTop = -bottomEdge;
                        }
                       
                        ref.current.style.top = newTop + 'px';
                    }
                    function bottom_onMouseUp() {
                        document.removeEventListener('mouseup', bottom_onMouseUp);
                        document.removeEventListener('mousemove', bottom_onMouseMove);
                    }
                    break;
                default:
                    throw new Error('Switch Inesperado!');
            }
        };
    }, [drag]);

    return (
        <Box ref={ref} colorScame={number}>
            <span>{number}</span>
        </Box>
    )
}
