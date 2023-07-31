<template>
  <form @submit.prevent>
    <div class="row justify-content-center">
      <div class="col-3">
        <select
          class="form-select"
          name="qtyCard"
          v-model="qtyCard"
          @change="updateQtyCard"
        >
          <option value="" disabled="" selected="selected">
            Select the number of cards...
          </option>
          <option value="1">One card</option>
          <option value="2">Two card</option>
          <option value="3">Three card</option>
          <option value="4">Four card</option>
        </select>
      </div>
      <div class="col-3">
        <select
          class="form-select"
          name="qtyCharacter"
          v-model="qtyCharacter"
          @change="updateQtyCharacter"
        >
          <option value="" disabled="" selected="">
            Select the number of characters...
          </option>
          <option
            :value="qty"
            v-for="qty in qtyCharacterOptions"
            :key="qty"
            v-number-to-words="qty"
          ></option>
        </select>
      </div>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-success w-100"
          @click="startNewGame"
        >
          New Game
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { commonComputed, commonActions } from "@/store/games/common";
export default {
  name: "FormNewGame",
  methods: {
    ...commonActions,
  },
  computed: {
    ...commonComputed,
  },
};
</script>