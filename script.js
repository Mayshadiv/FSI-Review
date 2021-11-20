// variable counter
let dogvotesTd = parseInt(localstorage.getItem('dogVotes'));
if (dogVotes === null){
        dogVotes = 0;
} else {
    dogVotes = parseInt(dogVotes)
}

let catvotes = parseInt(localstorage.getItem('catVotes'));
let fishvotes = parseInt(localstorage.getItem('fishVotes'));

    // selectors
    let dogDiv = document.querySelector('#doggo');
    let catDiv = document.querySelector('#catto');
    let fishDiv = document.querySelector('#fish');
    
    // created and appended dog vote button
    let dogvoteBtn = document.createElement('button');
    button.textContent = 'doggo vote';
    dogDiv.append(button);

    dogvoteBtn.addEventListener('click', function(){
        dogvotes = dogvotes + 1;
    document.querySelector("#doggo-votes").textContent = dogvotes;
    localStorage.setItem('dogVotes', dogVotes);
    
    document.querySelector("#total-votes").textContent = dogvotes + catvotes + fishvotes

    })


    // created and appended cat vote button
    let catvoteBtn = document.createElement('button');
    button.textContent = 'cat vote';
    catDiv.append(button);

    catvoteBtn.addEventListener('click', function(){
        catvotes = carvotes + 1;
    document.querySelector("#catto-votes").textContent = catvotes;
   
    document.querySelector("#total-votes").textContent = dogvotes + catvotes + fishvotes  
})


    // created and appended fish vote button
    let fishvoteBtn = document.createElement('button');
    button.textContent = 'fish vote';
    fishDiv.append(button);

   fishvoteBtn.addEventListener('click', function(){
        fishvotes = fishvotes + 1;
    document.querySelector("#fish-votes").textContent = fishvotes;
   
    document.querySelector("#total-votes").textContent = dogvotes + catvotes + fishvotes
    })

   
    
    