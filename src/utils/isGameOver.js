export default function GameOver(state) {
    let newState = state.map(obj => obj.value);

    if (newState.indexOf(0) !== 0 && newState.indexOf(0) !== 15) return false;

    for (let i = 0; i < newState.length-1; i++) {
        if (newState[i+1] < newState[i]) {
            if (newState[i+1] === 0) continue;
            return false;
        }
    };

    return true;
}