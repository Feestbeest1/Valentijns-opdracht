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
    document.getElementById('hartenContainer').appendChild(hart);
    setTimeout(() => {
        hart.remove();
    }, 5000);
}

function deelLink() {
    var naam = document.getElementById('naam').value;
    var boodschap = document.getElementById('boodschap').value;

    // De URL van je website
    var websiteURL = "https://www.jouwwebsite.com"; // Vervang dit met de URL van je website
    
    // Maak de gedeelde boodschap
    var bericht = encodeURIComponent("💖 Valentijnskaart 💖\nVoor: " + naam + "\n\n" + boodschap + "\n\nBekijk de kaart hier: " + websiteURL);
    
    // Gebruik de Web Share API voor moderne browsers (bijv. mobiele browsers)
    if (navigator.share) {
        navigator.share({
            title: 'Mijn Valentijnskaart',
            text: bericht,
            url: websiteURL
        }).catch((error) => console.log("Fout bij delen: " + error));
    } else {
        // Als de Web Share API niet wordt ondersteund, gebruik dan een standaard link naar WhatsApp
        var whatsappURL = "https://wa.me/?text=" + bericht;
        window.open(whatsappURL, "_blank");
    }
}



setInterval(maakHart, 500);
