// const allSeat = document.getElementsByClassName('seat-container');
// let count = 0;
// for (const seat of allSeat) {
//     seat.addEventListener('click', function () {
//         count = count - 1;
//     })
// }

// const button = document.querySelectorAll('seat-container');
// for (let allButtons of button){
//    allButtons.addEventListener('click', function(){
//     const buttons = allButtons.innerText;
//     console.log(buttons);
//     allButtons.setAttribute('disabled',true);
//    })
// }

// btn.addEventListener('click', function onclick(){
//     btn.style.backgroundColor = 'yellow';

// })

const allButton = document.getElementsByClassName('add-btn');
let count = 8;

for(const button of allButton){
//     // e er poriborte event dewa hoise
    button.addEventListener('click', function(event){
        count = count - 1;
     document.getElementById('count-container').innerText = count;
    })
}

let increased = 0;
for(const button of allButton){
    // e er poriborte event dewa hoise
    button.addEventListener('click', function(event){
        increased = increased + 1;
        
        const seat = event.target.parentNode.childNodes[1].innerText;
       
        console.log( event.target.parentNode.childNodes[1].innerText);
     document.getElementById("count-increased").innerText = increased;
    })
}

