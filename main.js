document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Score Variable set to zero
  let score = 0;

  // Input

  // Input Variables (Readability)
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value.toLowerCase();
  let input3 = document.getElementById("input3").value.toLowerCase();
  let input4 = document.getElementById("input4").value.toLowerCase();

  // Variable for score output for readability
  let scoreOutput = document.getElementById("score-output");

  // Program

  // If statement for Question 1
  if (input1 == 5) {
    document.getElementById("output1").innerHTML =
      "<p class=correct>You know how to en-passant, nice.</p>";
    score++;
  } else {
    document.getElementById("output1").innerHTML =
      "<p class=incorrect>Learning how to en-passant can really help in chess.</p>";
  }
  // If statement for Question 2
  if (input2 == 18 || input2 === "eighteen") {
    document.getElementById("output2").innerHTML =
      "<p class=correct>You now know a random fact about chess that is comletely useless.</p>";
    score++;
  } else {
    document.getElementById("output2").innerHTML =
      "<p class=incorrect>I guess you don't REALLY need to know this but its on the quiz so deal with it.</p>";
  }
  // If statement for Question 3
  if (input3 === "no") {
    document.getElementById("output3").innerHTML =
      "<p class=correct>Whether this was a 50/50 or you knowing this, congrats.</p>";
    score++;
  } else {
    document.getElementById("output3").innerHTML =
      "<p class=incorrect>Are you a beginner or trolling?</p>";
  }
  // If statement for Question 4
  if (input4 === "levy rozman") {
    document.getElementById(
      "output4"
    ).innerHTML = `<p class=correct>You got it right! You probably dont need his videos. Watch <span><a class="link correct" href=https://www.youtube.com/watch?v=iOd222WIEk8 target=_blank
      >Hikaru Bongcloud</a
    ></span> instead.</p>`;
    score++;
  } else {
    document.getElementById("output4").innerHTML =
      "<p class=incorrect>You don't know him??? You need to watch his videos.</p>";
  }

  // Output

  // If else statement for score output and feedback
  if (score == 0) {
    scoreOutput.innerHTML =
      "<p class=incorrect>Zero Blunders, 4 missed wins!!!</p> <p class=incorrect> 0/4, 0%</p>";
  } else if (score == 1) {
    scoreOutput.innerHTML =
      "<p class=lightRed>You have a skill issue</p> <p class=lightRed> 1/4, 25%</p>";
  } else if (score == 2) {
    scoreOutput.innerHTML =
      "<p class=grey>Halfway there!</p> <p class=grey> 2/4, 50%</p>";
  } else if (score == 3) {
    scoreOutput.innerHTML =
      "<p class=lightGreen>Great Move!</p> <p class=lightGreen> 3/4, 75%</p>";
  } else {
    scoreOutput.innerHTML =
      "<p class=correct>And he sacrifices ('inhales') THE QUEEEENNNN!! (brilliancy)</p> <p class=correct> 4/4, 100%</p>";
  }
}
