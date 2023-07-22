<template>
  <section>
    <FormNewGameVue />
  </section>

  <section>
    <FormGuess />
  </section>

  <section>
    <TableGuess />
  </section>
</template>

<script>
import FormNewGameVue from '@/components/FormNewGame.vue';
import FormGuess from '@/components/FormGuess.vue';
import TableGuess from './components/TableGuess.vue';
export default {
  name: 'App',
  components: {
    FormNewGameVue,
    FormGuess,
    TableGuess
  },
  data() {
    return {}
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

section,
p {
  display: block;
}

.d-block {
  display: block
}

.trye {
  border: 1px solid;
  padding: 5px;
}

.correct {
  background: green;
}

.maybe {
  background: yellow;
}

.wrong {
  background: red;
}
</style>
