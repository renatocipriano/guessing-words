<template>
  <form @submit.prevent>
    <section>
      <input type="text" name="guess" v-model="guess" @keyup="updateGuess" />
      <button @click="tryToGuess">Enviar</button>
    </section>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'FormGuess',
  methods: {
    ...mapActions(['tryToGuess', 'updateGuess']),
  },
  computed: {
    ...mapState(['guess', 'qtyCard']),
  },
}
</script>

<style></style>