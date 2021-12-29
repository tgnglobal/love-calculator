const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const percentage = document.getElementById('percentage');

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const inputOne = document.getElementById("inputOne").value;
  const inputTwo = document.getElementById("inputTwo").value;

  var a = Math.random();
  var b = Math.floor((a * 100) + 1);

  percentage.textContent = b;

  // What to display if the percentage is equal or less than 100
  if (percentage.textContent <= 100) {
    result.textContent = "Hello " + inputOne + ", HURAAAAY! you and " + inputTwo + " are made for each other. You are a very good match with " + inputTwo + ", regarding to my love relationship calculator, God has signed your future with " + inputTwo + ", enjoy your relationship.";
  }

  // What to display if the percentage is equal or less than 70
  if (percentage.textContent <= 70) {
    result.textContent = "Hello " + inputOne + ", your relationship with " + inputTwo + " is really working well, I know you can testify that also. I sincerely know that very soon you and " + inputTwo + " will be engaged.";
  }

  // What to display if the percentage is equal or less than 50
  if (percentage.textContent <= 50) {
    result.textContent = "Hello " + inputOne + ", I hope you are enjoying your relationship with " + inputTwo + " because regarding my result on this relationship, you and " + inputTwo + " do have clash sometimes. But the way I see things in future, your relationship with " + inputTwo + " is on 50% to work out and 50% to crash. So mind your steps from now, thanks.";
  }

  // What to display if the percentage is equal or less than 20
  if (percentage.textContent <= 20) {
    result.textContent = "Hello " + inputOne + ", I will advice you to cut off your relationship with " + inputTwo + " as soon as possible, don't enter 2022 with " + inputTwo + ", both frienship can't work out, thanks.";
  }
})
