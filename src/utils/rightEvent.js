export default function rightEvent(ref, event, dispatch) {
    let right_shiftX = event.clientX //- ref.current.getBoundingClientRect().left;
    // shiftY not needed, the thumb moves only horizontally

    //document.addEventListener('mousemove', right_onMouseMove);
    //document.addEventListener('mouseup', () => right_onMouseUp(ref));
    window.onmousemove = right_onMouseMove;
    window.onmouseup = () => right_onMouseUp(ref);

    function right_onMouseMove(event) {
        let newRight = event.clientX - right_shiftX;
    
        // the pointer is out of slider => lock the thumb within the bounaries
        if (newRight > 0) {
            newRight = 0;
        }

        let rightEdge = -ref.current.offsetWidth;


        if (newRight < rightEdge) {
            newRight = rightEdge;
        }

        ref.current.style.left = newRight + 'px';
    }

    function right_onMouseUp() {
        //document.removeEventListener('mouseup', right_onMouseUp);
        //document.removeEventListener('mousemove', right_onMouseMove);
        window.onmousemove = null;
        window.onmouseup = null;
        let leftHeight = Math.abs(parseInt(ref.current.style.left));
        let refHeight = ref.current.offsetHeight*0.5;
        ref.current.style.left = 0;
        if (leftHeight > refHeight) {
            dispatch({type: 'RIGHT'});
        };
    }
}