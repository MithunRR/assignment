const formDisplayed = false; 
setTimeout(function() {
    showFloatingForm();
}, 15000);
function showFloatingForm() {
    if (!formDisplayed) {
        var floatingForm = document.getElementById('floatingForm');
        floatingForm.style.display = 'block';
        formDisplayed = true; 
    }
}
function closeFloatingForm() {
    var floatingForm = document.getElementById('floatingForm');
    floatingForm.style.display = 'none';
    formDisplayed = false;
}


// Time Countdown 
var countdownDuration = 10 * 60;
function updateTimer() {
    var minutes = Math.floor(countdownDuration / 60);
    var seconds = countdownDuration % 60;
    document.getElementById('timer').innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    countdownDuration--;
    if (countdownDuration < 0) {
        clearInterval(timerInterval);
    }
}
updateTimer();
var timerInterval = setInterval(updateTimer, 1000);