window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("preloader").style.display = "none"; // Oculta el preloader
        document.getElementById("portfolio").style.opacity = "1"; // Muestra el portafolio con transición
    }, 3000); // Desaparece en 3 segundos
});


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}


function openModal() {
    document.getElementById("infoModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("infoModal").style.display = "none";
}


function openLiaModal() {
    document.getElementById("liaModal").style.display = "flex";
}

function closeLiaModal() {
    document.getElementById("liaModal").style.display = "none";
}

window.onclick = function(event) {
    let infoModal = document.getElementById("infoModal");
    let liaModal = document.getElementById("liaModal");

    if (event.target === infoModal) {
        infoModal.style.display = "none";
    }

    if (event.target === liaModal) {
        liaModal.style.display = "none";
    }
};

let index = 0;
const slides = document.querySelectorAll(".carousel img");
const totalSlides = slides.length;

function moveSlide(step) {
    index += step;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    document.querySelector(".carousel").style.transform = `translateX(-${index * 310}px)`;
}

function openLightbox(src) {
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightbox-img");

    
    lightboxImg.src = src;

    
    lightbox.style.display = "flex";
    lightboxImg.style.width = "auto";
    lightboxImg.style.height = "auto";
    lightboxImg.style.maxWidth = "95vw";
    lightboxImg.style.maxHeight = "95vh";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const slides = document.querySelectorAll(".carousel img");
    const totalSlides = slides.length;

    function moveSlide(step) {
        index += step;
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        document.querySelector(".carousel").style.transform = `translateX(-${index * 310}px)`;
    }

    document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
    document.querySelector(".next").addEventListener("click", () => moveSlide(1));
});


const options = ["Piedra", "Papel", "Tijeras"];

function getRandomComputerResult() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Piedra" && computer === "Tijeras") ||
    (player === "Tijeras" && computer === "Papel") ||
    (player === "Papel" && computer === "Piedra")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `¡El Jugador gana! ${userOption} vence a ${computerResult}`;
  } else if (computerResult === userOption) {
    return `¡Es un empate! Ambos eligieron ${userOption}`;
  } else {
    computerScore++;
    return `¡La Computadora gana! ${computerResult} vence a ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  const resultMessage = getRoundResults(userOption);
  roundResultsMsg.innerText = resultMessage;
  
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${playerScore === 3 ? "Jugador" : "La Computadora"} ¡Ha ganado el juego!`;
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    
    playerScoreSpanElement.textContent = playerScore;
    computerScoreSpanElement.textContent = computerScore;
    
    winnerMsgElement.textContent = '';
    roundResultsMsg.textContent = '';
    
    optionsContainer.style.display = 'block';
    resetGameBtn.style.display = 'none';
}

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Piedra");
});

paperBtn.addEventListener("click", function () {
  showResults("Papel");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Tijeras");
});

function openGameModal() {
    document.getElementById("gameModal").style.display = "flex";
}

function closeGameModal() {
    document.getElementById("gameModal").style.display = "none";
}

window.onclick = function(event) {
    let gameModal = document.getElementById("gameModal");
    if (event.target === gameModal) {
       gameModal.style.display = "none";
    }
};

const ctx = document.getElementById("skillsChart").getContext("2d");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["HTML", "CSS", "JavaScript", "WordPress", "React", "Backend (WIP)"],
    datasets: [
      {
        data: [40, 30, 20, 30, 15, 6],
        backgroundColor: ["#F16529", "#2965F1", "#F7DF1E", "#21759B", "#61DBFB", "#2f415f"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  },
});