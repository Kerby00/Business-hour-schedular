
var currentDayDisplayEl = $('#currentDay')
var currenthour = dayjs().hour()
console.log(currenthour)
//This function adds current date using dayjs/////
$(function () {
  var DisplayDay = dayjs().format('dddd, MMMM DD, YYYY');
  currentDayDisplayEl.text(DisplayDay)
});

//this is an event listener for clicking the save buttons///
$('.saveinput').on('click', function () {
  //these traverse the dom to find the correct input values///
  var inputval = $(this).siblings('.description').val();
  var idOfHour = $(this).parent().attr('id');
  //this adds the input value and key with an id of the hour blocks/////
  localStorage.setItem(idOfHour, inputval);
});

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

