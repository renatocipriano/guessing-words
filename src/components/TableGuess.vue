<template>
  <div class="row justify-content-center" v-if="game != null">
    <table
      :class="getTableClass()"
      class="p-4"
      v-for="(tries, indexTries) in game.tries"
      :key="indexTries"
    >
      <caption v-text="`Result: ` + getTableTitleCaption(indexTries)"></caption>

      <tr>
        <th
          :colspan="qtyCharacter"
          class="text-center"
          v-text="getTableTitleCaption(indexTries)"
        ></th>
      </tr>

      <tr v-for="(trye, indexTry) in tries" :key="indexTry">
        <td
          v-for="(t, i) in trye"
          :key="i"
          class="try text-center"
          :class="t.status"
          v-text="t.character"
        ></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { commonComputed } from "@/store/games/common";
export default {
  name: "TableGuess",
  computed: {
    ...commonComputed,
  },
  methods: {
    getTableTitleCaption(index) {
      return `Guess #${index + 1}`;
    },
    getTableClass() {
      let qtyCard = this.$store.getters.getQtyCard;
      return `col-${12 / qtyCard}`;
    },
  },
};
</script>