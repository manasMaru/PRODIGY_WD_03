let currentPlayer = "X";
let gameStarted = false;  

$(".button").on("click", function () {
 
  $(".block").text("");            
  $("#result").text("");            
  currentPlayer = "X";                     

 
  if (!gameStarted) {
    $(this).text("Restart");
    $("#instruction").hide();
    gameStarted = true;
  }
 

  $(".block").on("click", function () {
    if ($(this).text() === "") {
      if (currentPlayer === "X") {
        $(this).text("❌");
        currentPlayer = "O";
      } else {
        $(this).text("⭕️");
        currentPlayer = "X";
      }
      winningSequence();  
    }
  });
});

const winningPositions = [
  ["block1", "block2", "block3"],
  ["block4", "block5", "block6"],
  ["block7", "block8", "block9"],
  ["block1", "block4", "block7"],
  ["block2", "block5", "block8"],
  ["block3", "block6", "block9"],
  ["block1", "block5", "block9"],
  ["block3", "block5", "block7"],
];

function winningSequence() {
  for (let i = 0; i < winningPositions.length; i++) {
    const [a, b, c] = winningPositions[i];
    const val1 = $("#" + a).text();
    const val2 = $("#" + b).text();
    const val3 = $("#" + c).text();

    if (val1 !== "" && val1 === val2 && val2 === val3) {
      $("#result").text(val1 + " wins!");
      $(".block").off("click");
      return;
    }
  }

  
  let isFull = true;
  $(".block").each(function () {
    if ($(this).text() === "") {
      isFull = false;
    }
  });

  if (isFull) {
    $("#result").text("It's a draw!");
  }
}
