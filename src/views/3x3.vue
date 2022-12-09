<script setup>
import { ref, computed } from "vue";

const countClicks = ref(0);
const disablecell = ref(0);
const score = ref(0);
const player = ref("X");
const board = ref([
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]);

const CalculateWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

const winner = computed(() => CalculateWinner(board.value.flat()));

const MakeMove = (x, y) => {
  if (winner.value) return;

  if (board.value[x][y]) return;

  board.value[x][y] = player.value;

  player.value = player.value === "X" ? "O" : "X";
  countClicks.value++;
  console.log(countClicks.value);
  score.value = 9 - countClicks.value - disablecell.value;
};

const DisableCeller = () => {
  const i = Math.floor(Math.random() * board.value.length);
  const j = Math.floor(Math.random() * board.value[i].length);
  board.value[i][j] = "R";
  disablecell.value++;

  console.log(disablecell.value);
};
const ResetGame = () => {
  board.value = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  player.value = "X";
  countClicks.value = 0;
  disablecell.value = 0;
};
</script>

<template>
  <main class="bg">
    <div class="postion">
      <div class="subbg">
        <h1 class="header">X I O</h1>
      </div>
      <div class="subbg1">
        <RouterLink to="/">
          <button class="close">X</button>
        </RouterLink>
        <h3 class="header">[ {{ player }} TURN ]<br /></h3>
        <div>
          <div v-for="(row, x) in board" :key="x" class="board-row">
            <div
              v-for="(cell, y) in row"
              :key="y"
              @click="MakeMove(x, y)"
              :class="`board ${
                cell === 'X'
                  ? 'X'
                  : cell === 'O'
                  ? 'O'
                  : cell === 'R'
                  ? 'R'
                  : ''
              }`"
            >
              {{
                cell === "X"
                  ? "X"
                  : cell === "O"
                  ? "O"
                  : cell === "R"
                  ? "R"
                  : ""
              }}
            </div>
          </div>
        </div>
        <div>
          <h2 v-if="winner" class="header">
            [{{ winner }}] WIN <br />
            Score : {{ score }}
          </h2>
          <h2 v-else-if="countClicks === 9" class="header"><br />DRAW</h2>
          <h2
            v-else-if="disablecell === 1 && countClicks === 8"
            class="header"
          >
            <br />
            DRAW
          </h2>
          <h2 v-else class="header"><br /><br /></h2>
        </div>

        <div class="btn">
          <button
            :disabled="disablecell === 1"
            @click="DisableCeller"
            class="button"
          >
            Disable
          </button>

          <button @click="ResetGame" class="button">Reset</button>
        </div>
      </div>
    </div>
  </main>
</template>