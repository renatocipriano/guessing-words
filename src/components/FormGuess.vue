<template>
  <form class="my-4" @submit.prevent>
    <div class="row justify-content-center">
      <div class="col-6">
        <input
          name="guess"
          class="form-control"
          :class="myGuess.length > 0 ? 'uppercase' : ''"
          type="text"
          placeholder="Fill in your guess"
          aria-label="Fill in your guess"
          v-model="myGuess"
        />
      </div>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-success w-100"
          :disabled="myGuess.length != qtyCharacter"
          @click="handleMyGuess()"
        >
          Try
        </button>
      </div>
    </div>
    <p
      class="text-center p-1 m-0 text-danger fst-italic fw-medium"
      v-if="error.length > 0"
      v-text="error"
    ></p>
  </form>
</template>

<script>
import { commonComputed, commonActions } from "@/store/games/common";
export default {
  name: "FormGuess",
  data() {
    return { myGuess: "", words: [], error: "" };
  },
  mounted() {
    this.resetGuess();
    this.words = this.$store.getters.getPossibilities;
  },
  methods: {
    ...commonActions,
    resetGuess() {
      this.myGuess = "";
    },
    handleMyGuess() {
      this.error = "";
      this.myGuess = this.myGuess
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase();

      if (this.words.indexOf(this.myGuess) < 0) {
        this.error = "This word is not a possible guess";
        return false;
      }
      if (this.$store.getters.getTries.indexOf(this.myGuess) >= 0) {
        this.error = `You already try this word: ${this.myGuess}`;
        return false;
      }

      this.$store.dispatch("updateGuess", this.myGuess);
      this.$store.dispatch("tryToGuess");
      this.resetGuess();
    },
  },
  computed: { ...commonComputed },
};
</script>
<style scoped>
.uppercase {
  text-transform: uppercase;
}
</style>