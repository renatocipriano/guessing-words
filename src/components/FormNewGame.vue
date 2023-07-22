<template>
    <form action="">
        <select name="" v-model="qtyCard">
            <option value="" disabled selected>Select a option...</option>
            <option value="1">Solo</option>
            <option value="2">Dueto</option>
            <option value="3">Trio</option>
            <option value="4">Quarteto</option>
        </select>
        <select name="" v-model="qtyCharacter">
            <option value="" disabled selected>Select a option...</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
        </select>

        <button @click="startNewGame">new game</button>
    </form>
</template>

<script>
import dictionary from "@/data/dictionary.json";

export default {
    name: 'FormNewGame',
    components: {
    },
    data() {
        return {
            dictionary,
            qtyCard: "4",
            qtyCharacter: "5",
            game: {},
            possibilities: [],
        }
    },
    methods: {
        getRandom() {
            return this.possibilities[Math.floor(Math.random() * this.possibilities.length)];
        },
        setGame() {
            this.game.words = [];
            this.game.tries = [];
            for (let index = 0; index < this.qtyCard; index++) {
                this.game.tries.push([])
            }
        },
        startNewGame() {
            this.setGame();
            this.possibilities = this.dictionary.filter((word) => {
                return word.length == this.qtyCharacter
            });

            while (this.game.words.length < this.qtyCard) {
                let word = this.getRandom();
                this.game.words.push(word.split(''))
            }
        },
    }
}
</script>

<style></style>