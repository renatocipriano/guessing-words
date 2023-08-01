<template>
  <div class="row justify-content-center" v-if="game != null">
    <article
      :class="getArticleClass()"
      class="p-4"
      v-for="(tries, indexTries) in game.tries"
      :key="indexTries"
    >
      <table class="w-100">
        <thead>
          <tr>
            <th
              :colspan="qtyCharacter"
              class="text-center"
              v-text="getTableTitleCaption(indexTries)"
            ></th>
          </tr>
        </thead>

        <tr v-for="(trye, indexTry) in tries" :key="indexTry">
          <td
            v-for="(t, i) in trye"
            :key="i"
            class="try text-center"
            :class="t.status"
            v-text="t.character"
          ></td>
        </tr>

        <tfoot v-if="checkAllStatusCorrect(tries)">
          <tr>
            <td :colspan="qtyCharacter">
              <a :href="sucessfullGuess.url" target="_blank"
                >See {{ sucessfullGuess.word }} in Dicio.com.br</a
              >
            </td>
          </tr>
        </tfoot>
      </table>
    </article>
  </div>
</template>

<script>
import { commonComputed } from "@/store/games/common";
import { constants } from "@/constants";

export default {
  name: "TableGuess",
  data() {
    return {
      sucessfullGuess: {
        word: null,
        url: null,
      },
    };
  },
  computed: {
    ...commonComputed,
  },
  methods: {
    getTableTitleCaption: (index) => {
      return `Guess #${index + 1}`;
    },
    getArticleClass() {
      let qtyCard = this.$store.getters.getQtyCard;
      return `col-${12 / qtyCard}`;
    },
    checkAllStatusCorrect(tries) {
      if (tries.length == 0) {
        return false;
      }
      let lastGuess = tries[tries.length - 1],
        allCorrect = lastGuess.every(
          (item) => item.status === constants.STATUS_CORRECT
        ),
        label = lastGuess.map((item) => item.character).join("");

      this.sucessfullGuess = {
        word: label,
        url: `https://www.dicio.com.br/pesquisa.php?q=${label}`,
      };
      return allCorrect;
    },
  },
};
</script>