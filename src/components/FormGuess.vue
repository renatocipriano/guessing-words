<template>
    <form action="">
        <section><input type="text" v-model="guess" /> <button @click="tryToGuess">Enviar</button></section>
    </form>
</template>

<script>
export default {
    name: 'FormGuess',
    components: {
    },
    data() {
        return {
            guess: null
        }
    },
    methods: {
        tryToGuess() {
            /*
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
            */
        }
    }
}
</script>

<style></style>