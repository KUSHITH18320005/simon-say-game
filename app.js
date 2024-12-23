let gameSeq = []; 
let userSeq = []; 
let btnColors = ["red", "yellow", "green", "purple"]; 
let started = false; 
let level = 0; 


document.addEventListener("keypress", () => {
  if (!started) {
    document.querySelector("h2").innerText = `Level ${level}`;
    nextSequence();
    started = true;
  }
});

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    let userChosenColor = this.id;
    userSeq.push(userChosenColor);

    playFlash(this);
    checkAnswer(userSeq.length - 1);
  });
});


function nextSequence() {
  userSeq = [];
  level++;
  document.querySelector("h2").innerText = `Level ${level}`;

  let randomIndex = Math.floor(Math.random() * 4);
  let randomColor = btnColors[randomIndex];
  gameSeq.push(randomColor);


  let btn = document.getElementById(randomColor);
  playFlash(btn);
}


function checkAnswer(currentIndex) {
  if (userSeq[currentIndex] === gameSeq[currentIndex]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    gameOver();
  }
}


function gameOver() {
  document.querySelector("h2").innerHTML = `Game Over! Your score was <b>${level}</b>.<br>Press any key to restart.`;
  document.body.style.backgroundColor = "red";

  setTimeout(() => {
    document.body.style.backgroundColor = "#f4f4f4";
  }, 200);

  resetGame();
}


function resetGame() {
  gameSeq = [];
  started = false;
  level = 0;
}

function playFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}
