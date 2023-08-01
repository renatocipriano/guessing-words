export const mutations = {
    SET_DICTIONARY(state, payload) {
        state.dictionary = payload;
        state.qtyCharacterOptions = Object.keys(payload);
        state.qtyCharacterOptions.sort((a, b) => a - b);
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
        state.tries = []
        state.game = {}
        state.game.words = [];
        state.game.tries = [];
        for (let index = 0; index < state.qtyCard; index++) {
            state.game.tries.push([]);
        }
    },
    SET_POSSIBILITIES(state) {
        state.possibilities = state.dictionary[state.qtyCharacter].map((item) => item.label)
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
        const checkAllStatusCorrect = (data) => {
            return data == null ? false : data.every((item) => item.status === "correct");
        }

        state.tries.push(word.join(''));
        for (let indexCard = 0; indexCard < state.qtyCard; indexCard++) {
            let wordToGuess = wordsToGuess[indexCard],
                lastTry = state.game.tries[indexCard],
                lastPosition = lastTry.length > 0 ? lastTry[lastTry.length - 1] : null,
                alreadySuccessfull = checkAllStatusCorrect(lastPosition);

            if (!alreadySuccessfull) {
                let results = []
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
                    results.push(result);
                }

                state.game.tries[indexCard].push(results)
            }

        }
        state.guess = null
    }
}