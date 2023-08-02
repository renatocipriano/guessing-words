<template>
  <FormNewGameVue />
  <FormGuess v-if="game != null" />
  <TableGuess v-if="game != null" />
</template>

<script>
import FormGuess from "@/components/FormGuess.vue";
import FormNewGameVue from "@/components/FormNewGame.vue";
import TableGuess from "@/components/TableGuess.vue";
import { commonComputed } from "@/store/games/common";

export default {
  name: "HomePage",
  components: { FormNewGameVue, FormGuess, TableGuess },
  computed: {
    ...commonComputed,
  },
};
</script>

