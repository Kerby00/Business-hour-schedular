// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayDisplayEl = $('#currentDay')
var currenthour = dayjs().hour()
console.log(currenthour)
//This function adds current date using dayjs/////
$(function () {
  var DisplayDay = dayjs().format('dddd, MMMM DD, YYYY');
  currentDayDisplayEl.text(DisplayDay)
});
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
//this is an event listener for clicking the save buttons///
$('.saveinput').on('click', function () {
  //these traverse the dom to find the correct input values///
  var inputval = $(this).siblings('.description').val();
  var idOfHour = $(this).parent().attr('id');
  //this adds the input value and key with an id of the hour blocks/////
  localStorage.setItem(idOfHour, inputval);
});
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
/// This function takes the value of data set and compares it to a 24 hour clock/value, then applies classes depending on the if statement///
$('.time-block').each(function () {
  var blockhour = $(this).data('time');
  if (blockhour < currenthour) {
    $(this).addClass('past')
  } else if (blockhour > currenthour) {
    $(this).addClass('future')
  } else {
    $(this).addClass('present')
  }
});
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // These lines of code add the localStorage items that are linked to an id to the 'description' tag correlating to the same id///
  $('#hour-9 .description').val(localStorage.getItem("hour-9"));
  $('#hour-10 .description').val(localStorage.getItem("hour-10"));
  $('#hour-11 .description').val(localStorage.getItem("hour-11"));
  $('#hour-12 .description').val(localStorage.getItem("hour-12"));
  $('#hour-01 .description').val(localStorage.getItem("hour-01"));
  $('#hour-02 .description').val(localStorage.getItem("hour-02"));
  $('#hour-03 .description').val(localStorage.getItem("hour-03"));
  $('#hour-04 .description').val(localStorage.getItem("hour-04"));
  $('#hour-05 .description').val(localStorage.getItem("hour-05")); 
  // TODO: Add code to display the current date in the header of the page.
