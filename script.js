const syncButton = document.getElementsByClassName('syncButton');

let isSyncing = [false];

console.log(syncButton);

syncButton[0].addEventListener ('click', function (){
  console.log("clicked");
  syncButton[0].classList.toggle('pushed');
  document.getElementsByClassName("syncButton").disabled = true;
})

const submitButton = document.getElementsByClassName('submitButton');
console.log(submitButton);

submitButton[0].addEventListener('click', function() {
    console.log("clicked!");
    buttons[0].classList.toggle('pushed');
  });
