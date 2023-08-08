<template>
  <FormNewGameVue />
  <FormGuess v-if="game != null" />
  <TableGuess v-if="game != null" />
  <Congratulations v-if="isCompleted" />
</template>

<script>
import FormGuess from "@/components/FormGuess.vue";
import FormNewGameVue from "@/components/FormNewGame.vue";
import TableGuess from "@/components/TableGuess.vue";
import Congratulations from "@/components/Congratulations.vue";
import { commonComputed } from "@/store/games/common";

export default {
  name: "HomePage",
  components: { FormNewGameVue, FormGuess, TableGuess, Congratulations },
  computed: {
    ...commonComputed,
  },
};
</script>

