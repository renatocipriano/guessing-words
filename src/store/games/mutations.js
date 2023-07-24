export const mutations = {
    SET_DICTIONARY(state, payload) {
        state.dictionary = payload;
    },
    SET_GUESS(state, payload) {
        state.guess.push(payload);
    },
    UPDATE_QTY_CARD(state, payload) {
        state.qtyCard = parseInt(payload);
    },
    UPDATE_QTY_CHARACTER(state, payload) {
        state.qtyCharacter = parseInt(payload);
    },
    UPDATE_GUESS(state, payload) {
        state.guess = payload;
    },
    SET_GAME(state) {
        state.game = {}
        state.game.words = [];
        state.game.tries = [];
        for (let index = 0; index < state.qtyCard; index++) {
            state.game.tries.push([]);
        }
    },
    SET_POSSIBILITIES(state) {
        state.possibilities = state.dictionary.filter((word) => {
            return word.length === state.qtyCharacter;
        });
    },
    START_NEW_GAME(state) {
        while (state.game.words.length < state.qtyCard) {
            let word = state.possibilities[Math.floor(Math.random() * state.possibilities.length)];
            state.game.words.push(word.split(''))
        }
    },
    TRY_TO_GUESS(state) {
        let word = state.guess.toUpperCase().split('');
        const wordsToGuess = JSON.parse(
            JSON.stringify(state.game.words)
        );

        for (let indexCard = 0; indexCard < state.qtyCard; indexCard++) {
            let wordToGuess = wordsToGuess[indexCard]

            for (let index = 0; index < word.length; index++) {
                let cardCharacter = wordToGuess[index];
                let guessCharacter = word[index];

                let result = {
                    character: guessCharacter,
                    status: 'wrong',
                }

                if (cardCharacter == guessCharacter) {
                    result.status = 'correct'
                } else if (wordToGuess.includes(guessCharacter)) {
                    result.status = 'maybe'
                }
                state.game.tries[indexCard].push(result)
            }
        }
        state.guess = null
    }
}