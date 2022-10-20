// Stopwatch Values
var tenths = 0;
var seconds = 0;
var minutes = 0;
var timer;

// Displaying the value
var displayTenths = 0;
var displaySeconds = 0;
var displayMinutes = 0;

let interval = null;

let status = "start";

function stopWatch(){

    Tenths++;

    if(Tenths / 999 === 1){
        Tenths = 0;
        minutes++;

        if(seconds / 60 === 1){
            seconds = 0;
            minutes++;
        }

    }

    if(tenths < 10){
        displayTenths = "0" + tenths.toString();
    }
    else{
        displayTenths = tenths;
    }

    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    document.getElementById("display").innerHTML = displayTenths + ":" + displaySeconds + ":" + displayMinutes;

}

function startTimer() {
    timer = startInterval(showTimer, 100);  // use clearInterval(timer) to stop it
}
function showTimer() {
    tenths++;
<button type="button" id="start" onclick="startTimer()"></button>

//Stopwatch Reset
function resetTimer() {

    window.clearInterval(interval);
    tenths = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById("display").innerHTML = "00:00:0";
    document.getElementById("start").innerHTML = "Start";
}
