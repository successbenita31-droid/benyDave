// fun joke button

function tellJoke() {
  let jokes = [
    "What is a programmer's favourite snack?... Microchips! ",
    "Why was the maths book sad?....Because it had too many problems!!",
    "Why did the computer go to school?..Because it wanted to increase it's byte size!",
  ];
  let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  document.getElementById("joke").textContent = randomJoke;

  console.log(jokes[0]);
  /*
   alert(jokes);
   */
}
tellJoke();

/*
let randomNumber = Math.floor(Math.random() * 5);
console.log(randomNumber);
*/

// music player toggle
function changeSong() {
  let select = document.getElementById("musicSelect");
  let player = document.getElementById("audioPlayer");
  let source = document.getElementById("audioSource");
  // change source based on users selection
  source.src = select.value;
  // Reload and play the new song
  player.load();
  player.play();
}

// change theme color
function changeTheme() {
  let color = document.getElementById("colorPicker").value;
  document.getElementById("pages").style.backgroundColor = color;
}

// contact form submission
function sendMessage(event) {
  let personName = document.getElementById("myName").value;
  let personMessage = document.getElementById("message").value;
  let contactMessage =
    "Thanks, " +
    personName +
    " ! your message has been received " +
    personMessage;
  document.getElementById("contactResult").textContent = contactMessage;
  event.preventDefault();
}

// rating
function rate(emoji) {
  document.getElementById("ratingResults").textContent = "you rated " + emoji;
}
