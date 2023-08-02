import { constants } from "@/constants";

const checkAllStatusCorrect = (data) => {
    return data?.every((item) => item.status === constants.STATUS_CORRECT) || false;
}

const checkResultGuess = (cardCharacter, guessCharacter, wordToGuess) => {
    return {
        character: guessCharacter,
        status: cardCharacter === guessCharacter
            ? constants.STATUS_CORRECT
            : wordToGuess.includes(guessCharacter) ? constants.STATUS_MAYBE : constants.STATUS_WRONG,
    };
}

const randomWordFromPossibilities = (possibilities) => {
    return possibilities[Math.floor(Math.random() * possibilities.length)].split('');
}

export const mutations = {
    SET_DICTIONARY(state, payload) {
        state.dictionary = payload;
        state.qtyCharacterOptions = [...Object.keys(payload)].sort((a, b) => a - b);
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
        state.guess = payload.toUpperCase();
    },
    SET_GAME(state) {
        state.tries = []
        state.game = { words: [], tries: [], }
        for (let index = 0; index < state.qtyCard; index++) {
            state.game.tries.push([]);
        }
    },
    SET_POSSIBILITIES(state) {
        state.possibilities = state.dictionary[state.qtyCharacter].map((item) => item.label)
    },
    START_NEW_GAME(state) {
        state.isPlaying = true;
        state.game.words = Array.from({ length: state.qtyCard }, () => randomWordFromPossibilities(state.possibilities));
    },
    RESET_GAME(state) {
        state.isPlaying = false;
        state.qtyCard = null;
        state.qtyCharacter = null;
        state.guess = null;
        state.game = null;
        state.tries = [];
        state.possibilities = [];
    },
    TRY_TO_GUESS(state) {
        state.tries.push(state.guess);
        const wordSplited = state.guess.split(''),
            wordsToGuess = JSON.parse(JSON.stringify(state.game.words));

        for (let indexCard = 0; indexCard < state.qtyCard; indexCard++) {
            let wordToGuess = wordsToGuess[indexCard],
                lastTry = state.game.tries[indexCard],
                lastPosition = lastTry.at(-1) || null,
                alreadySuccessfull = checkAllStatusCorrect(lastPosition);

            if (!alreadySuccessfull) {
                const results = wordSplited.map((character, index) => checkResultGuess(wordToGuess[index], character, wordToGuess));
                state.game.tries[indexCard].push(results);
            }
        }
        state.guess = null
    }
}