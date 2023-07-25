<template>
  <div class="row justify-content-center" v-if="game != null">
    <table
      class="col-3 m-2"
      v-for="(tries, indexTries) in game.tries"
      :key="indexTries"
    >
      <caption v-text="`Result: ` + getTableTitleCaption(indexTries)"></caption>

      <tr>
        <th
          :colspan="qtyCard"
          class="text-center"
          v-text="getTableTitleCaption(indexTries)"
        ></th>
      </tr>

      <tr v-for="(trye, indexTry) in tries" :key="indexTry">
        <td v-for="(t, i) in trye" :key="i" class="try" :class="t.status">
          {{ t.character }}
        </td>
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
  },
};
</script>