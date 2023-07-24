<template>
    <form @submit.prevent>
        <select name="qtyCard" v-model="qtyCard" @change="updateQtyCard">
            <option value="" disabled selected>Select a option...</option>
            <option value="1">Solo</option>
            <option value="2">Dueto</option>
            <option value="3">Trio</option>
            <option value="4">Quarteto</option>
        </select>
        <select name="qtyCharacter" v-model="qtyCharacter" @change="updateQtyCharacter">
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
import { mapState, mapActions } from 'vuex';

export default {
    name: 'FormNewGame',
    methods: {
        ...mapActions(['startNewGame','updateQtyCard', 'updateQtyCharacter']),
    },
    computed: {
        ...mapState(['qtyCard', 'qtyCharacter', 'game', 'possibilities']),
    },
}
</script>

<style></style>