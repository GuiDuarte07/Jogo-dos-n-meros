export default function reducer (state, action) {
    let newState = [...state];

    switch (action.type) {
        case "START":
            let range = [...Array(16).keys()];
            newState = []
            for(let i = 0; i < 16; i++) {
                let random = Math.floor(Math.random() * range.length);
                newState.push({value: range[random]})
                range.splice(random, 1)
            }

            return newState;
        default:
            throw new Error("Comportamento Inesperado");
    }
}