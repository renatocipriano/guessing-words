import { mapState, mapActions } from 'vuex';

export const commonComputed = {
    ...mapState([
        "qtyCard",
        "qtyCharacter",
        "qtyCharacterOptions",
        "guess",
        "game",
        "possibilities",
        "dictionary",
        "tries",
    ]),
};

export const commonActions = {
    ...mapActions([
        "setDictionary",
        "setGuess",
        "updateQtyCard",
        "updateQtyCharacter",
        "updateGuess",
        "startNewGame",
        "tryToGuess",
    ]),
};