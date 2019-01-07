var race = document.getElementById('race');
var text_span = document.querySelectorAll('.RaceInfo span');
var raceInfo1 = document.querySelector('#RaceInfo1 span');
var raceInfo2 = document.querySelector('#RaceInfo2 span');
var raceInfo3 = document.querySelector('#RaceInfo3 span');
var raceInfo4 = document.querySelector('#RaceInfo4 span');
var raceInfo5 = document.querySelector('#RaceInfo5 span');

var counter = document.getElementById('counter');
var HorseWidth = document.getElementById('horse1').offsetWidth;
var horseRun = document.getElementsByClassName('horse');
var horse1 = document.getElementById('horse1');
var horse2 = document.getElementById('horse2');
var horse3 = document.getElementById('horse3');
var horse4 = document.getElementById('horse4');
var horse5 = document.getElementById('horse5');
var isComplete = false;
var place = '';
var reset = document.getElementById('Reset');
var maxWidth = window.innerWidth - HorseWidth - 50;

//Function RACE
race.addEventListener('click', function() {
    alert('The race is going to start after 3s');
    text_span.textContent = "";
    counter.style.animationName = "ready";
    counter.style.zIndex = "8";

    raceCars(0, 0, 0, 0, 0);
});


//Function RUN HORSES
function raceCars(h1, h2, h3, h4, h5) {
    race.disabled = true;

    setTimeout(function() {

        var timeID = setInterval(function() {

      if (h1 > maxWidth) {
                raceInfo1.textContent = "WINNER";
                alert('Winner is Horse 1');
                clearInterval(timeID);
                reset.style.display = "block";
                horse1.setAttribute('src', 'images/horse_stay.png');
                horse2.setAttribute('src', 'images/horse_stay.png');
                horse3.setAttribute('src', 'images/horse_stay.png');
                horse4.setAttribute('src', 'images/horse_stay.png');
                horse5.setAttribute('src', 'images/horse_stay.png');
                race.disabled = false;
                

            } else if (h2 > maxWidth) {
                raceInfo2.textContent = " WINNER";
                alert('Winner is Horse 2');
                reset.style.display = "block";
                horse1.setAttribute('src', 'images/horse_stay.png');
                horse2.setAttribute('src', 'images/horse_stay.png');
                horse3.setAttribute('src', 'images/horse_stay.png');
                horse4.setAttribute('src', 'images/horse_stay.png');
                horse5.setAttribute('src', 'images/horse_stay.png');
                clearInterval(timeID);
                race.disabled = false;

            } else if (h3 > maxWidth) {
                raceInfo3.textContent = " WINNER";
                alert('Winner is Horse 3');
                reset.style.display = "block";
                horse1.setAttribute('src', 'images/horse_stay.png');
                horse2.setAttribute('src', 'images/horse_stay.png');
                horse3.setAttribute('src', 'images/horse_stay.png');
                horse4.setAttribute('src', 'images/horse_stay.png');
                horse5.setAttribute('src', 'images/horse_stay.png');
                clearInterval(timeID);
                race.disabled = false;

            } else if (h4 > maxWidth) {
                raceInfo4.textContent = " WINNER";
                alert('Winner is Horse 4');
                reset.style.display = "block";
                horse1.setAttribute('src', 'images/horse_stay.png');
                horse2.setAttribute('src', 'images/horse_stay.png');
                horse3.setAttribute('src', 'images/horse_stay.png');
                horse4.setAttribute('src', 'images/horse_stay.png');
                horse5.setAttribute('src', 'images/horse_stay.png');
                clearInterval(timeID);
                race.disabled = false;
                
            } else if (h5 > maxWidth) {
                raceInfo5.textContent = "WINNER";
                alert('Winner is Horse 5');
                reset.style.display = "block";
                horse1.setAttribute('src', 'images/horse_stay.png');
                horse2.setAttribute('src', 'images/horse_stay.png');
                horse3.setAttribute('src', 'images/horse_stay.png');
                horse4.setAttribute('src', 'images/horse_stay.png');
                horse5.setAttribute('src', 'images/horse_stay.png');
                clearInterval(timeID);
                race.disabled = false;

            } else {

            }

            horse1.style["margin-left"] = 0 + 'px';
            horse2.style["margin-left"] = 0 + 'px';
            horse3.style["margin-left"] = 0 + 'px';
            horse4.style["margin-left"] = 0 + 'px';
            horse5.style["margin-left"] = 0 + 'px';

            h1 = h1 + Math.random() * 10;
            h2 = h2 + Math.random() * 10;
            h3 = h3 + Math.random() * 10;
            h4 = h4 + Math.random() * 10;
            h5 = h5 + Math.random() * 10;

            horse1.style["margin-left"] = h1 + 'px';
            horse2.style["margin-left"] = h2 + 'px';
            horse3.style["margin-left"] = h3 + 'px';
            horse4.style["margin-left"] = h4 + 'px';
            horse5.style["margin-left"] = h5 + 'px';
        }, 10);
        horse1.setAttribute('src', 'images/horse_run.gif');
        horse2.setAttribute('src', 'images/horse_run.gif');
        horse3.setAttribute('src', 'images/horse_run.gif');
        horse4.setAttribute('src', 'images/horse_run.gif');
        horse5.setAttribute('src', 'images/horse_run.gif');
    }, 3800)

}

//Function RESET
reset.addEventListener('click', function() {
    counter.style.animationName = "";
    counter.style.zIndex = "7";
    text_span.textContent = "";
    reset.style.display = "none";
    horse1.style["margin-left"] = 0 + 'px';
    horse2.style["margin-left"] = 0 + 'px';
    horse3.style["margin-left"] = 0 + 'px';
    horse4.style["margin-left"] = 0 + 'px';
    horse5.style["margin-left"] = 0 + 'px';
    raceInfo1.textContent = "";
    raceInfo2.textContent = "";
    raceInfo3.textContent = "";
    raceInfo4.textContent = "";
    raceInfo5.textContent = "";

});