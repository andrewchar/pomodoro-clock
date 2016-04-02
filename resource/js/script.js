var breakTime = 5; //initial break time value
var sessionTime = 2; //initial session time value
var sessionTimeOnBtn = 2; //initial btn num to match session time
var mInterv;

var activeTime = false;

/* Session time countdown */
function startSession(minutes) {
    var seconds = 60;
    var mins = minutes;
    function tick() {
        var counter = document.getElementById("session-time-on-clock");
        var current_minutes = mins-1
        seconds--;
        console.log(seconds);
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds <= 0 ) {
            mInterv = setTimeout(tick, 250);
        } else {
            if(mins > 1){
                startSession(mins-1);           
            } 
        }
    }
    tick();
}



/* Break time countdown */

 
/* stop clock */
function myStopFunction() {
    //clearInterval(sInterv);
    clearInterval(mInterv);
    $('#session-time-on-clock').text(sessionTime);
}

$(document).ready(function() {
    
    /* Decrease break time */
    $("#break-subtract").click(function(){
        if (breakTime < 2 || activeTime === true) {
            return;
        } else {
            breakTime--;
            $('.break-time').text(breakTime);
        }
    }); 
    
    /* Increase break time */
    $("#break-add").click(function(){
        if (activeTime === true) {
            return;
        } else {
        breakTime++;
        $('.break-time').text(breakTime);
        }
    });
    
    /* Decrease session time */
    $("#session-subtract").click(function(){
        if (sessionTime < 2 || activeTime === true) {
            return;
        } else {
            sessionTime = sessionTimeOnBtn;
            sessionTime--;
            sessionTimeOnBtn--;
            $('.session-time-on-btn').text(sessionTime);
            $('#session-time-on-clock').text(sessionTime);
        }
    });
    
    /* Increase session time */
    $("#session-add").click(function(){
        if (activeTime === true) {
            return;
        } else {
        sessionTime = sessionTimeOnBtn;
        sessionTime++;
        sessionTimeOnBtn++;
        $('.session-time-on-btn').text(sessionTime);
        $('#session-time-on-clock').text(sessionTime);
        }
    });
    
    /* Start timer */
    $('#start-clock').click(function(){
        if (activeTime === true) {
            return;
        } else {
        activeTime = true;
        startSession(sessionTime);
        }
    })
    
    /* Stop timer */
    $('#stop-clock').click(function(){
        activeTime = false;
        myStopFunction();
    })
    
}); //doc rdy func
    
    


