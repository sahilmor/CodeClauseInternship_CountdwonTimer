let timer;
let intervalId;

document.querySelector("#start-button").addEventListener("click", function(){
    document.querySelector(".countdown-box").style.textAlign = "center";
});

function startCountdown() {
  const countdownDate = new Date(document.getElementById("countdown-date").valueAsNumber);
  const now = new Date();
  const timeDifference = countdownDate - now;

  if (timeDifference < 0) {
    alert("Please select a valid date and time in the future.");
    return;
  }

  document.getElementById("start-button").style.display = "none";
  document.getElementById("pause-resume-button").style.display = "inline-block";
  document.getElementById("stop-reset-button").style.display = "inline-block";

  intervalId = setInterval(() => {
    const now = new Date();
    const timeLeft = countdownDate - now;

    if (timeLeft <= 0) {
      clearInterval(intervalId);
      document.getElementById("timer").innerHTML = "Time's up!";
      return;
    }

    const seconds = Math.floor((timeLeft / 1000) % 60);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    document.getElementById("timer").innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }, 1000);
}

function pauseResumeCountdown() {
  if (document.getElementById("pause-resume-button").innerHTML === "Pause") {
    clearInterval(intervalId);
    document.getElementById("pause-resume-button").innerHTML = "Resume";
  } else {
    startCountdown();
    document.getElementById("pause-resume-button").innerHTML = "Pause";
  }

}

function stopResetCountdown() {
  clearInterval(intervalId);
  document.getElementById("timer").innerHTML = "";
  document.getElementById("start-button").style.display = "inline-block";
  document.getElementById("pause-resume-button").style.display = "none";
  document.getElementById("stop-reset-button").style.display = "none";
  document.getElementById("pause-resume-button").innerHTML = "Pause";

}