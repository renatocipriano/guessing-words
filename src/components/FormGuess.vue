<template>
  <form class="my-4" @submit.prevent>
    <div class="row justify-content-center">
      <div class="col-6">
        <input
          name="guess"
          class="form-control"
          type="text"
          placeholder="Fill in your guess"
          aria-label="Fill in your guess"
          v-model="myGuess"
        />
      </div>
      <div class="col-1">
        <button
          type="button"
          class="btn btn-success w-100"
          :disabled="myGuess.length != qtyCharacter"
          @click="
            updateGuess(myGuess);
            tryToGuess();
            myGuess = '';
          "
        >
          Try
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { commonComputed, commonActions } from "@/store/games/common";
export default {
  name: "FormGuess",
  data() {
    return { myGuess: "" };
  },
  methods: { ...commonActions },
  computed: { ...commonComputed },
};
</script>