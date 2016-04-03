var breakTime = 5; //initial break time value
var sessionTime = 25; //initial session time value
var sessionTimeOnBtn = 25; //initial btn num to match session time
var sessionInterv; //setTimeout value for session
var breakInterv; //setTimeout value for break
var flag = false;

/* Session time countdown */
function startSession(minutes) {
    $('.session-break-toggle').text('Session');
    var seconds = 60;
    var mins = minutes;
    function sessiontick() {
        var counter = document.getElementById("session-time-on-clock");
        var current_minutes = mins-1;
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
         if( seconds > 0 ) {
            sessionInterv = setTimeout(sessiontick, 1000);
        } else {
            if(mins > 1){
                setTimeout(function () { startSession(mins - 1); }, 1000);           
            } else {
                /* once clock reaches 00:00 call break time countdown to begin break time */
                startBreak(breakTime);
                clearInterval(sessionInterv);
            }
        }
    }
    sessiontick();
};

/* Break time countdown */
function startBreak(minutes) {
    $('.session-break-toggle').text('Break!');
    var seconds = 60;
    var mins = minutes;
    function breaktick() {
        var counter = document.getElementById("session-time-on-clock");
        var current_minutes = mins-1;
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
         if( seconds > 0 ) {
            breakInterv = setTimeout(breaktick, 1000);
        } else {
            if(mins > 1){
                setTimeout(function () { startBreak(mins - 1); }, 1000);           
            } else {
                /* once clock reaches 00:00 call session time countdown to begin session time */
                startSession(sessionTime);
                clearInterval(breakInterv);
            }
        }
    }
    breaktick();
};
 
/* stop clock */
function myStopFunction() {
    clearInterval(sessionInterv);
    clearInterval(breakInterv);
    $('#session-time-on-clock').text(sessionTime);
}

$(document).ready(function() {
    
    /* Decrease break time */
    $("#break-subtract").click(function(){
        if (breakTime < 2 || flag === true) {
            return;
        } else {
            breakTime--;
            $('.break-time').text(breakTime);
        }
    }); 
    
    /* Increase break time */
    $("#break-add").click(function(){
        if (flag === true) {
            return;
        } else {
            breakTime++;
            $('.break-time').text(breakTime);
        }
    });
    
    /* Decrease session time */
    $("#session-subtract").click(function(){
        if (sessionTime < 2 || flag === true) {
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
        if (flag === true) {
            return;
        } else {
            sessionTime = sessionTimeOnBtn;
            sessionTime++;
            sessionTimeOnBtn++;
            $('.session-time-on-btn').text(sessionTime);
            $('#session-time-on-clock').text(sessionTime);
        }
    });
    
    /* toggle start/stop button w/ start&stop session */
    $('#start-clock').on('click', function(e){
        e.preventDefault();
        /* if stop-clock class active, clear all setTimeOut(). reset on-screen session time */
        if ($(this).hasClass('stop-clock')) {
            flag = false;
            clearInterval(sessionInterv);
            clearInterval(breakInterv);
            $('#session-time-on-clock').text(sessionTime);
            $(this).text('Start').removeClass('stop-clock');
        } else {
            flag = true;
            startSession(sessionTime);
            $(this).text('Stop').addClass('stop-clock');
        }
    });
  
    
    
    
    
    
    
});


    
    


