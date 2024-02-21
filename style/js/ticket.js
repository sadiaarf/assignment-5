
const allButton = document.getElementsByClassName('add-btn');
let count = 8;

for (const button of allButton) {
   
    button.addEventListener('click', function (event) {
        count = count - 1;
        document.getElementById('count-container').innerText = count;
    })
}

let increased = 0;
for (const button of allButton) {
   
    button.addEventListener('click', function (event) {
        increased = increased + 1;
       
        document.getElementById("count-increased").innerText = increased;
    })
}
