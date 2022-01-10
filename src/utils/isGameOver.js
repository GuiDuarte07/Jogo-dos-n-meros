export default function GameOver(state) {
    let newState = state.map((obj) => {
        if (obj.value !== 0) return obj.value;
    });

    for (let i = 0; i < newState.length-1; i++) {
        if (newState[i+1] < newState[i]) {
            return false;
        }
    };
    return true;
}