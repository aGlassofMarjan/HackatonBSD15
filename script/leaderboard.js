let users = [];

const addUser = (ev) => {
  ev.preventDefault();

  let user = {
    id: Date.now(),
    name: document.getElementById("name").value,
    score: generateRandomScore() // nanti score disini, func randomscore matiin
  };
  users.push(user);
  document.querySelector("form").reset();

  updateLeaderboard();


  localStorage.setItem("UserList", JSON.stringify(users));
}

//RANDOM SCORE
//ini buat contoh score aja
const generateRandomScore = () => {
  return Math.floor(Math.random() * 101);
}

const updateLeaderboard = () => {

  users.sort((a, b) => b.score - a.score);


  const leaderboardBody = document.getElementById('leaderboard-body');
  leaderboardBody.innerHTML = '';

  users.forEach((user, index) => {
    const row = `<tr>
                  <td>${index + 1}</td>
                  <td>${user.name}</td>
                  <td>${user.score}</td>
                </tr>`;
    leaderboardBody.innerHTML += row;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const storedUsers = localStorage.getItem("UserList");
  if (storedUsers) {
    users = JSON.parse(storedUsers);
    updateLeaderboard();
  }

  document.getElementById('btn').addEventListener('click', addUser);
});
