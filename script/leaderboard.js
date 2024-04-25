let users = [];
let user = {}
const addUser = (ev) => {
  ev.preventDefault();
  user = {
    id: Date.now(),
    name: document.getElementById("name").value,
    score: generateRandomScore() // nanti score disini, func randomscore matiin
  };

  document.querySelector("form").reset();

}

//RANDOM SCORE
//ini buat contoh score aja
const generateRandomScore = () => {
  return document.getElementById('finalScore').innerText
}

const updateLeaderboard = () => {

  users.sort((a, b) => b.score - a.score);
  const topUser = users.slice(0, 10)

  const leaderboardBody = document.getElementById('leaderboard-body');
  leaderboardBody.innerHTML = '';

  topUser.forEach((user, index) => {
    const row = `<tr>
    <td class="text-md text-gray-800">${index + 1}</td>
    <td class="text-md text-gray-800">${user.name}</td>
    <td class="text-md text-gray-800">${user.score}</td>
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

  document.getElementById('mulai').addEventListener('click', addUser);
});

backButton = document.getElementById("kembali")
backButton.addEventListener("click", function () {
  user.score = document.getElementById('finalScore').innerText
  users.push(user);
  updateLeaderboard();


  localStorage.setItem("UserList", JSON.stringify(users));

})
