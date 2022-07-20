//time zone and date
currentTimeDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentTimeDate);

//creating const for my times
const am7 = $("#hour-7");
const am8 = $("#hour-8");
const am9 = $("#hour-9");
const am10 = $("#hour-10");
const am11 = $("#hour-11");
const pm12 = $("#hour-12");
const pm1 = $("#hour-13");
const pm2 = $("#hour-14");
const pm3 = $("#hour-15");
const pm4 = $("#hour-16");
const pm5 = $("#hour-17");

//declare current hour of the day (military time)
let now = moment().hours(); 

//creating my functions for the colors that represent past present or future
function time7 (time) {
    if (now === time) {
        am7.addClass('present');
    } else  if (now < time){
        am7.addClass('future');
    } else {
        am7.addClass('past');
    }
}

function time8 (time) {
    if (now === time) {
        am8.addClass('present');
    } else  if (now < time){
        am8.addClass('future');
    } else {
        am8.addClass('past');
    }
}

function time9 (time) {
    if (now === time) {
        am9.addClass('present');
    } else  if (now < time){
        am9.addClass('future');
    } else {
        am9.addClass('past');
    }
}

function time10 (time) {
    if (now === time) {
        am10.addClass('present');
    } else  if (now < time){
        am10.addClass('future');
    } else {
        am10.addClass('past');
    }
}

function time11 (time) {
    if (now === time) {
        am11.addClass('present');
    } else  if (now < time){
        am11.addClass('future');
    } else {
        am11.addClass('past');
    }
}

function time12 (time) {
    if (now === time) {
        pm12.addClass('present');
    } else  if (now < time){
        pm12.addClass('future');
    } else {
        pm12.addClass('past');
    }
}

function time1 (time) {
    if (now === time) {
        pm1.addClass('present');
    } else  if (now < time){
        pm1.addClass('future');
    } else {
        pm1.addClass('past');
    }
}

function time2 (time) {
    if (now === time) {
        pm2.addClass('present');
    } else  if (now < time){
        pm2.addClass('future');
    } else {
        pm2.addClass('past');
    }
}

function time3 (time) {
    if (now === time) {
        pm3.addClass('present');
    } else  if (now < time){
        pm3.addClass('future');
    } else {
        pm3.addClass('past');
    }
}

function time4 (time) {
    if (now === time) {
        pm4.addClass('present');
    } else  if (now < time){
        pm4.addClass('future');
    } else {
        pm4.addClass('past');
    }
}

function time5 (time) {
    if (now === time) {
        pm5.addClass('present');
    } else  if (now < time){
        pm5.addClass('future');
    } else {
        pm5.addClass('past');
    }
}
//calling times
time7 (7);
time8 (8);
time9 (9);
time10 (10);
time11 (11);
time12 (12);
time1 (13);
time2 (14);
time3 (15);
time4 (16);
time5 (17);

button.addEventListener("click" )

