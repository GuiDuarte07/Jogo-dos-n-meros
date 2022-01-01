export default function bottomEvent(ref, event, dispatch) {
    let bottom_shiftY = event.clientY;
    // shiftX not needed, the thumb moves only horizontally
    
    document.addEventListener('mousemove', bottom_onMouseMove);
    document.addEventListener('mouseup', () => bottom_onMouseUp(ref, event));
    
    function bottom_onMouseMove(event) {
        let newTop = -bottom_shiftY + event.clientY; //+ ref.current.getBoundingClientRect().left;
    
        // the pointer is out of slider => lock the thumb within the bounaries
        if (newTop > 0) {
            newTop = 0;
        };

        let bottomEdge = ref.current.offsetHeight;

        if (newTop < -bottomEdge) {
            newTop = -bottomEdge;
        };

        ref.current.style.top = newTop + 'px';
    }

    function bottom_onMouseUp(ref, event) {
        document.removeEventListener('mouseup', bottom_onMouseUp);
        document.removeEventListener('mousemove', bottom_onMouseMove);
        let topHeight = Math.abs(parseInt(ref.current.style.top));
        let refHeight = ref.current.offsetHeight*0.5;
        if (topHeight > refHeight) {
            dispatch({type: 'BOTTOM'});
        } else {
            ref.current.style.top = 0;
        };
    };
};