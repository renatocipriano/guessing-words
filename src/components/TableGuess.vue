<template>
    <div>
        <div v-for="(tries, indexTries) in game.tries" :key="indexTries" style="width:25%; float:left">
            <p>{{ game.words[indexTries] }}</p>
            <span v-for="(trye, indexTry) in tries" :key="indexTry">
                <span class="trye" :class="trye.status">{{ trye.character }}</span>
                <div v-if="(indexTry + 1) % qtyCharacter == 0">
                    <br>
                </div>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TableGuess',
    components: {
    },
    data() {
        return {
            game: {}
        }
    },
    methods: {
    }
}
</script>

<style></style>