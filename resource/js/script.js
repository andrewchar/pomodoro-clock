var breakTime = 5;
var sessionTime = 25;



$(document).ready(function() {
    
    /* Decrease break time */
    $("#break-subtract").click(function(){
        if (breakTime < 2) {
            return;
        } else {
            breakTime--;
            $('.break-time').text(breakTime);
        }
    }); 
    
    /* Increase break time */
    $("#break-add").click(function(){
        breakTime++;
        $('.break-time').text(breakTime);
    });
    
    /* Decrease session time */
    $("#session-subtract").click(function(){
        if (sessionTime < 2) {
            return;
        } else {
            sessionTime--;
            $('.session-time').text(sessionTime);
        }
        $('#session-time').text(sessionTime);
    });
    
    /* Increase session time */
    $("#session-add").click(function(){
        sessionTime++;
        $('.session-time').text(sessionTime);
        $('#session-time').text(sessionTime);
    });
    
}); //doc rdy func
    
    


