//import range from '../../utils/arraytest';

export default function reducer (state, action) {
    let newState = [...state];
    let toIdx;
    let aux;

    switch (action.type) {
        case "START":
            let range = [...Array(16).keys()];
            newState = []
            for(let i = 0; i < 16; i++) {
                let random = Math.floor(Math.random() * range.length);
                newState.push({value: range[random], drag: null});
                range.splice(random, 1);
            };
            
            addDrags(newState);

            return newState;

        case "LEFT":
            let leftIdx = newState.map(obj => obj.drag).indexOf('LEFT');
            toIdx = newState.map(obj => obj.value).indexOf(0);

            newState = removeTags(newState);
            
            //swaping with destructuring assigment
            //[newState[leftIdx], newState[toIdx]] = [newState[toIdx], newState[leftIdx]];

            aux = newState[leftIdx];
            newState[leftIdx] = newState[toIdx];
            newState[toIdx] = aux;

            addDrags(newState);

            return newState;

        case "BOTTOM":
            let bottomIdx = newState.map(obj => obj.drag).indexOf('BOTTOM');
            toIdx = newState.map(obj => obj.value).indexOf(0);

            newState = removeTags(newState);
            
            aux = newState[bottomIdx];
            newState[bottomIdx] = newState[toIdx];
            newState[toIdx] = aux;
            //swaping with destructuring assigment
            //[newState[bottomIdx], newState[toIdx]] = [newState[toIdx], newState[bottomIdx]];
            addDrags(newState);

            return newState;
        case "TOP":
            let topIdx = newState.map(obj => obj.drag).indexOf('TOP');
            toIdx = newState.map(obj => obj.value).indexOf(0);

            newState = removeTags(newState);
            
            aux = newState[topIdx];
            newState[topIdx] = newState[toIdx];
            newState[toIdx] = aux;
            //swaping with destructuring assigment
            //[newState[topIdx], newState[toIdx]] = [newState[toIdx], newState[topIdx]];
            addDrags(newState);

            return newState;
        case "RIGHT":
            let rightIdx = newState.map(obj => obj.drag).indexOf('RIGHT');
            toIdx = newState.map(obj => obj.value).indexOf(0);

            newState = removeTags(newState);
            
            aux = newState[rightIdx];
            newState[rightIdx] = newState[toIdx];
            newState[toIdx] = aux;
            //swaping with destructuring assigment
            //[newState[rightIdx], newState[toIdx]] = [newState[toIdx], newState[rightIdx]];
            addDrags(newState);

            return newState;
        default:
            throw new Error("Comportamento Inesperado");
    }
}

function removeTags(state) {
    return state.map(state => ({...state, drag:null}))
}

function addDrags(state) {
    console.log(state)
    let i = state.map(obj => obj.value).indexOf(0);

    let allValues = [
        {idx: i-1, tag: 'LEFT'}, 
        {idx: i-4, tag: 'TOP'},
        {idx: i+1, tag: 'RIGHT'},
        {idx: i+4, tag: 'BOTTOM'}
    ];
    
    allValues.forEach(y => {
        if (y.idx >= 0 && y.idx < 16) {
            state[y.idx].drag = y.tag;
        }
    });

    let importNums = [0, 3, 4, 7, 8, 11, 12, 15];
    if (importNums.includes(i)) {
        if (i % 2) {
            state[(i+1)%15].drag = null;
        } else if (i !== 0) {
            state[i-1].drag = null;
        }
    };
}
