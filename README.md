# Guessing Words Project

## Description

Guessing Words is an interactive and entertaining word guessing game inspired by [term.ooo](https://term.ooo/) that challenges players to guess the hidden word based on [Dicio - Dicionário Online de Português](https://www.dicio.com.br/). It is designed to test and improve players' vocabulary, language and thinking skills in a fun and engaging way.

### How to Play

1. **Select the Quantity of Cards/Words**: In the first select, choose the number of cards or words you want to play with.

2. **Select the Maximum Word Length**: In the second select, choose the maximum number of characters the hidden word can have.

3. **Start a New Game**: Click on the "New Game" button to begin the game with your chosen settings.

4. **Make a Guess**: Tip your guess into the input field provided.

5. **Try Your Guess**: Click the "Try" button to check your guess against the hidden word.

6. **Result Feedback**:
   - Caracther Correct and in Correct Position (Color: Mint Green - #a5d6a7): Correct characters that are in the right position will be highlighted with a mint green color.
   - Caracther Correct but in Wrong Position (Color: Gold - #d3ad69): Characters that are correct but in different positions will be highlighted with a gold color.
   - Caracther Not in Word (Color: Light Coral - #ef9a9a): Characters that do not exist in the word will be highlighted with a light coral color.

## Installation

To run Guessing Words using Docker, follow these steps:

1. Clone this repository: `git clone git@github.com:renatocipriano/guessing-words.git`
2. Navigate to the project directory: `cd guessing-words`
3. In your terminal, execute the following commands:
   1. `docker-compose build`
   2. `docker run --rm -v "${PWD}:/app" -w "/app" -it node:16 /bin/sh`
   3. `npm install`
   4. Type `exit` to leave the container.
   5. `docker-compose up`

These steps will build the Docker images required and start the Guessing Words application in a Docker container.

Please ensure you have Docker and Docker Compose installed on your system before executing the above commands. If you don't have them installed, you can download and install Docker from the official website: https://www.docker.com/get-started

## Contact

If you have any questions, suggestions, or just want to say hi, feel free to reach out to us at: [GitHub Issues](https://github.com/renatocipriano/guessing-words/issues)

Let the guessing begin! Happy gaming! 🎮
