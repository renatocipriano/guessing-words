<template>
  <section>
    <select name="" v-model="qtyCard">
      <option value="" disabled selected>Select a option...</option>
      <option value="1">Solo</option>
      <option value="2">Dueto</option>
      <option value="3">Trio</option>
      <option value="4">Quarteto</option>
    </select>
    <select name="" v-model="qtyCharacter">
      <option value="" disabled selected>Select a option...</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
    </select>

    <button @click="startGame">Gerar</button>

  </section>

  <section><input type="text" v-model="guess" /> <button @click="tryToGuess">Enviar</button></section>

  <section>
    <div v-for="(tries, indexTries) in game.tries" :key="indexTries" style="width:25%; float:left">
      <p>{{ game.words[indexTries] }}</p>
      <span v-for="(trye, indexTry) in tries" :key="indexTry">
        <span class="trye" :class="trye.status">{{ trye.character }}</span>
        <div v-if="(indexTry + 1) % qtyCharacter == 0">
          <br>
        </div>
      </span>
    </div>

  </section>
</template>

<script>
import dictionary from "./data/dictionary.json";
export default {
  name: 'App',
  components: {
  },
  mounted() {
    this.startGame();
  },
  data() {
    return {
      dictionary,
      guess: '',
      possibilities: [],
      qtyCard: "4",
      qtyCharacter: "5",
      game: {}
    }
  },
  methods: {
    setGame() {
      this.game = {
        words: [

        ],
        tries: [

        ],
      }

      for (let index = 0; index < this.qtyCard; index++) {
        this.game.tries.push([])
      }
    },
    getRandom() {
      return this.possibilities[Math.floor(Math.random() * this.possibilities.length)];
    },
    startGame() {
      this.setGame();
      this.possibilities = this.dictionary.filter((word) => {
        return word.length == this.qtyCharacter
      });

      while (this.game.words.length < this.qtyCard) {
        let word = this.getRandom();
        this.game.words.push(word.split(''))
      }
    },

    tryToGuess() {
      let word = this.guess.toUpperCase().split('');
      const wordsToGuess = JSON.parse(
        JSON.stringify(this.game.words)
      );

      for (let indexCard = 0; indexCard < this.qtyCard; indexCard++) {
        let wordToGuess = wordsToGuess[indexCard]

        for (let index = 0; index < word.length; index++) {
          let cardCharacter = wordToGuess[index];
          let guessCharacter = word[index];

          let result = {
            character: guessCharacter,
            status: 'wrong',
          }

          if (cardCharacter == guessCharacter) {
            result.status = 'correct'
          }
          else if (wordToGuess.includes(guessCharacter)) {
            result.status = 'maybe'
          }
          this.game.tries[indexCard].push(result)
        }
      }
      this.guess = ''
    }
  }
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
