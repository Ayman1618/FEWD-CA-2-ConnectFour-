
const winner = localStorage.getItem("winnername")
console.log(winner)

const naam = localStorage.getItem("showname1");
const naam2 = localStorage.getItem("showname2");

const x = document.querySelector(".return")

// Winning statements output

if(winner == "red"){
    
    x.innerHTML = "RED WINS!"
    x.style.color = "red"
    x.style.fontSize = "3vw";
    x.style.marginLeft = "10vw"

    // Array of values
const randomValues = ["Well Done!", "Good Game!", "Tricky Win!", "Dicey Play!" , "Good work!"];

// Function to get a random value from the array
function getRandomValue(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Get a random value and display it
const randomOutput = getRandomValue(randomValues);
win.innerHTML = randomOutput


}

if(winner == "yellow"){
  x.innerHTML = "YELLOW WINS!"
  x.style.color = "yellow"
  x.style.fontSize = "3vw";
  x.style.marginLeft = "7vw"


    // Array of values
    const randomValues = ["Well Done!", "Good Game!", "Tricky Win!", "Dicey Play!" , "Good work!"];

// Function to get a random value from the array
function getRandomValue(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Get a random value and display it
const randomOutput = getRandomValue(randomValues);
win.innerHTML = randomOutput

}


