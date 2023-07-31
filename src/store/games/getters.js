export const getters = {
    getQtyCard: (state) => state.qtyCard,
    getQtyCharacter: (state) => state.qtyCharacter,
    getGame: (state) => state.game,
    getPossibilities: (state) => state.possibilities,
    getDictionary: (state) => state.dictionary,
    getTries: (state) => state.tries,
    getQtyCharacterOptions: (state) => Object.keys(state.dictionary),
}