//using moment.js to show date
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

const saveButtonEl = $(".saveBtn");
const savedLocalStorage = $("#localStorageAlert");

//declare current hour of the day (military time) & localstorage
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

//calling times to show function in action
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


saveButtonEl.on("click", function () {
    //userTask is the value of text that is inputed into the text area
    //since parents are nested-went back one parent that shared siblings to target correct parent 
    var userTask = $(this).parent($("div")).siblings(".form-control").val().trim();
    //same thing but targeting the hour of where the text was inputed
    var hour = $(this).parent($("div")).siblings(".form-control").attr("id");
    //setting local storages using 2 vars from above
    localStorage.setItem ( hour, userTask);
    //let user know information was saved 
    savedLocalStorage.text("Appointment Added to Local Storage ✔️");

    //calling function
    renderMessage();
});


function renderMessage() {
    //adds text to the item corresponding to the hour
    $("#hour-7").text(localStorage.getItem("hour-7"));
    $("#hour-8").text(localStorage.getItem("hour-8"));
    $("#hour-9").text(localStorage.getItem("hour-9"));
    $("#hour-10").text(localStorage.getItem("hour-10"));
    $("#hour-11").text(localStorage.getItem("hour-11"));
    $("#hour-12").text(localStorage.getItem("hour-12"));
    $("#hour-13").text(localStorage.getItem("hour-13"));
    $("#hour-14").text(localStorage.getItem("hour-14"));
    $("#hour-15").text(localStorage.getItem("hour-15"));
    $("#hour-16").text(localStorage.getItem("hour-16"));
    $("#hour-17").text(localStorage.getItem("hour-17"));

};

//renders message to appear when reloading browser again
renderMessage();
