
let leaderboardData = [
  { name: "d", score: 80 },
  { name: "a", score: 70 },
  { name: "c", score: 50 },
  { name: "b", score: 20 },
  { name: "e", score: 10 }
]

//render leaderboard
function renderLeaderboard() {
  const leaderboardBody = document.getElementById("leaderboard-body");
  leaderboardBody.innerHTML = "";
  leaderboardData.forEach((player, index) => {
      const row = `<tr>
                      <td>${index + 1}</td>
                      <td>${player.name}</td>
                      <td>${player.score}</td>
                  </tr>`;
      leaderboardBody.innerHTML += row;
  });
}

// Add player to leaderboard
function addPlayer() {
  const playerName = document.getElementById("player-name").value;
  const playerScore = parseInt(document.getElementById("player-score").value);

  if (playerName && !isNaN(playerScore)) {
      leaderboardData.push({ name: playerName, score: playerScore });
      leaderboardData.sort((a, b) => b.score - a.score); 
      renderLeaderboard();
  } else {
      alert("Please enter a valid name and score.");
  }
}

// Initial render
renderLeaderboard();