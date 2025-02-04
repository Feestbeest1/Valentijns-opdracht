function toonKaart() {
    var naam = document.getElementById('naam').value;
    var boodschap = document.getElementById('boodschap').value;
    
    document.getElementById('getoondeNaam').innerText = "Voor: " + naam;
    document.getElementById('getoondeBoodschap').innerText = boodschap;
    document.getElementById('kaartBoodschap').style.display = 'block';
}

function maakHart() {
    const hart = document.createElement('div');
    hart.classList.add('hart');
    hart.style.left = Math.random() * 100 + 'vw';
    hart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.getElementById('ballonContainer').appendChild(hart);
    setTimeout(() => {
        hart.remove();
    }, 5000);
}

setInterval(maakHart, 500);