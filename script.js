let outputEl = document.getElementById("answer");
document.getElementById("8-ball").addEventListener("click", btnClicked);
function btnClicked() {
  let randNum = Math.random();
  console.log(randNum);

  // save the question into a variable
  let ansEl = document.getElementById("text-prompt").value;

  if (ansEl == "is the magic 8 ball real") {
    outputEl.innerHTML = "YOU DARE QUESTION ME!!!";
    // check if the question == "", if so, put the appropriate answer
  } else if (ansEl == 0) {
    outputEl.innerHTML = "ask a question";
  } else if (randNum < 0.25) {
    outputEl.innerHTML = "maybe but not 100%";
  } else if (randNum < 0.5) {
    outputEl.innerHTML = "absolutely";
  } else if (randNum < 0.75) {
    outputEl.innerHTML = "not likely";
  } else if (randNum < 0.99) {
    outputEl.innerHTML = "absolutely not";
  }
}
