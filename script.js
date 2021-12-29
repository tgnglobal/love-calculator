const checkBtn = document.getElementById("check-btn");
const inputOne = document.getElementById("inputOne");
const inputTwo = document.getElementById("inputTwo");
const result = document.getElementById("result");
const percentage = document.getElementById('percentage');

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
    var a = Math.random();
    var b = Math.floor((a * 100) + 1);
    percentage.textContent = b;

    // What to display if the percentage is equal or less than 100
    if (percentage.textContent <= 100) {
        result.textContent = "Hello " + inputOne.value + ", HURAAAAY! you and " + inputTwo.value + " are made for each other. You are a very good match with " + inputTwo.value + ", regarding my love relationship result, God has signed your future with " + inputTwo.value + ", enjoy your frienship.";
    }

    // What to display if the percentage is equal or less than 70
    if (percentage.textContent <= 70) {
        result.textContent = "Hello " + inputOne.value + ", your relationship with " + inputTwo.value + " is really working well, I know you can testify that also. I sincerely know that very soon you and " + inputTwo.value + " will be engaged.";
    }

    // What to display if the percentage is equal or less than 50
    if (percentage.textContent <= 50) {
        result.textContent = "Hello " + inputOne.value + ", i hope you are enjoying your relationship with " + inputTwo.value + " because regarding my result on this relationship, you and " + inputTwo.value + " do have clash sometimes. But the way i see things in future, your relationship with " + inputTwo.value + " is on 50% to work out and 50% to crash. So mind your steps from now, thanks.";
    }

    // What to display if the percentage is equal or less than 20
    if (percentage.textContent <= 20) {
        result.textContent = "Hello " + inputOne.value + ", i will advice you to send off your relationship with " + inputTwo.value + " this 2021, don't enter 2022 with " + inputTwo.value + ", both frienship can't work out, thanks.";
    }






})
