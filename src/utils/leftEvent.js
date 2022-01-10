export default function leftEvent(ref, event, dispatch) {
    let left_shiftX = event.clientX //- ref.current.getBoundingClientRect().left;
    // shiftY not needed, the thumb moves only horizontally

    console.log(ref)
    //ref.current.addEventListener('mousemove', left_onMouseMove);
    //ref.current.addEventListener('mouseup', () => left_onMouseUp(ref));
    window.onmousemove = left_onMouseMove;
    window.onmouseup = () => left_onMouseUp(ref);
    function left_onMouseMove(event) {
        console.log('move')
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
        //document.removeEventListener('mouseup', left_onMouseUp);
        //document.removeEventListener('mousemove', left_onMouseMove);
        window.onmousemove = null;
        window.onmouseup = null;
        console.log('mouseup', ref.current)
        let rightHeight = Math.abs(parseInt(ref.current.style.left));
        let refHeight = ref.current.offsetHeight*0.5;
        ref.current.style.left = 0;
        if (rightHeight > refHeight) {
            dispatch({type: 'LEFT'});
        }
    }
}