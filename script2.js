let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lap');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;
let lapNumber = 1;

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    lapNumber = 1;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    document.getElementById('laps').innerHTML = "";
});

lapBtn.addEventListener('click', function () {
    if (timer) {
        let laps = document.getElementById('laps');
        let lapTime = document.createElement('li');
        lapTime.innerHTML = `Lap ${lapNumber}: ${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}:${formatTime(count)}`;
        laps.appendChild(lapTime);
        lapNumber++;
    }
});

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        document.getElementById('hr').innerHTML = formatTime(hour);
        document.getElementById('min').innerHTML = formatTime(minute);
        document.getElementById('sec').innerHTML = formatTime(second);
        document.getElementById('count').innerHTML = formatTime(count);
        setTimeout(stopWatch, 10);
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
