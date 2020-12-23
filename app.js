score = 0;
document.getElementById('hit-score').innerHTML = score;
var shatterSound = document.getElementById("shatterSound");
var slapSound = document.getElementById("slapSound")

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    if (!audio) return;

    audio.currentTime = 0;

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);
    key.classList.add('playing');
};

function playSoundMobile() {
    slapSound.currentTime = 0;
    slapSound.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function changeImage() {
    document.getElementById("img").src = "images/hit2.svg";
    setTimeout(function () { document.getElementById("img").src = "images/hit1.svg" }, 200);
}

function throwAway() {
    shatterSound.currentTime = 600;
    document.getElementById("throwaway").style.display = "none";
    setTimeout(function () { document.getElementById("img").src = "images/hit3.svg" }, 300);
    setTimeout(function () { document.getElementById("img").src = "images/hit4.svg" }, 500);
    setTimeout(function () { document.getElementById("img").src = "images/hit5.svg" }, 800);
    setTimeout(function () { shatterSound.play() }, 600);
    setTimeout(function () { document.getElementById('textbox').innerHTML = "Press space bar to continue." }, 900);
    console.log("test")
}

function updateUI() {
    playSoundMobile();
    changeImage();
    score += 1
    document.getElementById('hit-score').innerHTML = score;
    if (score > 9) {
        document.getElementById('textbox').innerHTML = "Ain't life hard?";
        document.getElementById('textbox-mobile').innerHTML = "Ain't life hard?";
    }
    if (score > 19) {
        document.getElementById('textbox').innerHTML = "Uhh... are you ok?";
        document.getElementById('textbox-mobile').innerHTML = "Uhh... are you ok?";
    }
    if (score > 25) {
        document.getElementById('textbox').innerHTML = "Alright, let's throw the computer OUT THE WINDOW.";
        document.getElementById('textbox-mobile').innerHTML = "Alright, let's throw the computer OUT THE WINDOW.";
        document.getElementById("throwaway").style.display = "block";
        document.getElementById('throwaway').innerHTML = "DESTROY COMPUTER 💀"
    }
    if (score > 29) {
        document.getElementById('textbox').innerHTML = "I think it's time for you to take a break.";
        document.getElementById('textbox-mobile').innerHTML = "I think it's time for you to take a break.";
    }
    if (score > 39) {
        document.getElementById('textbox').innerHTML = "I know this sucks but you'll get out of it and feel so much better instantly.";
        document.getElementById('textbox-mobile').innerHTML = "I know this sucks but you'll get out of it and feel so much better instantly.";
    }
    if (score > 49) {
        document.getElementById('textbox').innerHTML = "Welp, I hope this is kinda helpful at the least.";
        document.getElementById('textbox-mobile').innerHTML = "Welp, I hope this is kinda helpful at the least.";
    }
    if (score > 75) {
        document.getElementById('textbox').innerHTML = "Omg. You just hit your head over 75 times. How does that feel?";
        document.getElementById('textbox-mobile').innerHTML = "Omg. You just hit your head over 75 times. How does that feel?";
    }
    if (score > 100) {
        document.getElementById('textbox').innerHTML = "You just passed 100! You're accomplishing something!";
        document.getElementById('textbox-mobile').innerHTML = "You just passed 100! You're accomplishing something!";
    }
    if (score > 150) {
        document.getElementById('textbox').innerHTML = "Should I call the ambulance...?";
        document.getElementById('textbox-mobile').innerHTML = "Should I call the ambulance...?";
    }
    if (score > 200) {
        document.getElementById('textbox').innerHTML = "I don't have more messages for you, but I believe in you. If you came this far, you definitely have the willpower to succeed!";
        document.getElementById('textbox-mobile').innerHTML = "I don't have more messages for you, but I believe in you. If you came this far, you definitely have the willpower to succeed!";
    }
}

document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        updateUI();
    }
}

// transition end event
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);