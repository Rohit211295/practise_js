let game = ["s", "w", "g"]
let k = true
let j = 0

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (k === true) {
  var i = Math.round(randomInteger(0, 2))
  console.log(game[i])
  let a = prompt("Enter the game element")
 
      if (a == game[i]) {
        alert("Nobody wins")
      }
      else {

        while (a == "s") {
          if (a == "s" && i == 1) {
            alert("Player wins")
            j++
          }
          else {
            alert("computer wins")
          }
          break;
        }
        while (a == "w") {
          if (a == "w" && i == 2) {
            alert("Player wins")
            j++
          }
          else {
            alert("computer wins")
          }
          break;
        }
        while (a == "g") {
          if (a == "g" && i == 0) {
            alert("Player wins")
            j++
          }
          else {
            alert("computer wins")
          }
          break;
        }
      }
    
    k = confirm("Do you want to play more?")
    console.log(k,"K")
  }

alert(`Your score is ${j}`)