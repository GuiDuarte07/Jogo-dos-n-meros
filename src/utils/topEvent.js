export default function topEvent(ref, event, dispatch) {
    let top_shiftY = event.clientY
    // shiftX not needed, the thumb moves only horizontally

    document.addEventListener('mousemove', top_onMouseMove);
    document.addEventListener('mouseup', () => top_onMouseUp(ref));

    function top_onMouseMove(event) {
        let newTop = top_shiftY - event.clientY;

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
    function top_onMouseUp(ref) {
        document.removeEventListener('mouseup', top_onMouseUp);
        document.removeEventListener('mousemove', top_onMouseMove);
        let bottomHeight = Math.abs(parseInt(ref.current.style.top));
        let refHeight = ref.current.offsetHeight*0.5;
        if (bottomHeight > refHeight) {
            dispatch({type: 'TOP'});
        } else {
            ref.current.style.bottom = 0;
        };
    }
}