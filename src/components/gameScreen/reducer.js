export default function reducer (state, action) {
    let newState = [...state];

    switch (action.type) {
        case "START":
            let range = [...Array(16).keys()];
            newState = []
            for(let i = 0; i < 16; i++) {
                let random = Math.floor(Math.random() * range.length);
                newState.push({value: range[random], drag: null})
                range.splice(random, 1)
            }
            console.log(newState)
            let i = newState.map(obj => obj.value).indexOf(0);
            console.log(i, 'i')
            let allValues = [
                {idx: i-1, tag: 'LEFT'}, 
                {idx: i-4, tag: 'TOP'},
                {idx: i+1, tag: 'RIGHT'},
                {idx: i+4, tag: 'BOTTOM'}
            ];

            allValues.forEach(y => {
                //console.log(newState)
                //console.log(y)
                if (y.idx >= 0 && y.idx < 16) {
                    newState[y.idx].drag = y.tag;
                }
            })

            return newState;
        default:
            throw new Error("Comportamento Inesperado");
    }
}