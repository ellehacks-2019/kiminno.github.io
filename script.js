const syncButton = document.getElementsByClassName('syncButton');

let isSyncing = [false];

console.log(syncButton);

syncButton.addEventListener ('click', function (){
  console.log("clicked");
  syncButton.classList.toggle('pushed');
  document.getElementsByClassName("syncButton").disabled = true;
  }
})
