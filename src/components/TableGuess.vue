<template>
  <section v-if="game != null">
    <article v-for="(tries, indexTries) in game.tries" :key="indexTries">
      <span v-for="(trye, indexTry) in tries" :key="indexTry">
        <span class="trye" :class="trye.status">{{ trye.character }}</span>
        <div v-if="(indexTry + 1) % qtyCharacter == 0">
          <br />
        </div>
      </span>
    </article>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TableGuess",
  computed: {
    ...mapState(["game"]),
  },
};
</script>