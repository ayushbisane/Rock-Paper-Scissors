let options = ["rock", "paper", "scissors"];


function PlayGame(userChoice){
  console.log("User Choice IS "+userChoice);

  let randomindex = Math.floor(Math.random()*3);

  const computerChoice = options[randomindex];

  console.log("")
}