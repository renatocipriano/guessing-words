export const actions = {
    setDictionary(context, payload) {
        context.commit('SET_DICTIONARY', payload)
    },
    setGuess(context, payload) {
        context.commit('SET_GUESS', payload)
    },
    updateQtyCard(context, payload) {
        context.commit('UPDATE_QTY_CARD', payload.target.value)
    },
    updateQtyCharacter(context, payload) {
        context.commit('UPDATE_QTY_CHARACTER', payload.target.value)
    },
    updateGuess(context, payload) {
        context.commit('UPDATE_GUESS', payload)
    },
    startNewGame(context, payload) {
        context.commit('SET_GAME')
        context.commit('SET_POSSIBILITIES')
        context.commit('START_NEW_GAME', payload)
    },
    tryToGuess(context) {
        context.commit('TRY_TO_GUESS')
    },
    resetGame(context) {
        context.commit('RESET_GAME')
    }
}