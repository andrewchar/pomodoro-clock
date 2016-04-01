var breakTime = 5; //initial break time value
var sessionTime = 25; //initial session time value
var sessionTimeOnBtn = 25; //initial btn num to match session time
var mInterv;
var sInterv;
var activeTime = false;

/* Clock time */
function startSession() {
    activeTime = true;
    var seconds = 60;
    var mins = sessionTime;
    function tick() {
        var counter = document.getElementById("session-time-on-clock");
        var current_minutes = mins-1;
        seconds--;
        counter.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
             sInterv = setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                mInterv = setTimeout(function() {
                    mins - 1; 
                }, 1000);
            }
        }
    }
    tick();
}

/* Break time */
function startBreak() {
    activeTime = true;
    var seconds = 60;
    var mins = sessionTime;
    function tick() {
        var counter = document.getElementById("session-time-on-clock");
        var current_minutes = mins-1;
        seconds--;
        counter.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
             sInterv = setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                mInterv = setTimeout(function() {
                    mins - 1; 
                }, 1000);
            }
        }
    }
    tick();
}
 
/* stop clock */
function myStopFunction() {
    clearInterval(sInterv);
    clearInterval(mInterv);
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
        startSession();
        }
    })
    
    /* Stop timer */
    $('#stop-clock').click(function(){
        activeTime = false;
        myStopFunction();
    })
    
}); //doc rdy func
    
    


