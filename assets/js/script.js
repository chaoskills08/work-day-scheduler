var hours = document.getElementById('.time-block');

var currentDay = moment();
$("#currentDay").text(currentDay.format('dddd, MMMM Do'));

function timeColor() {
  var hour = moment().hours();
  console.log(hour);

  $(".time-block").each(function () {
    var currHour = parseInt($(this).attr("id"));
    if (currHour < hour) {
      $(this).addClass("past");
    } else if (currHour === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    } console.log(currHour);
  });
}
timeColor();

// function timeof(); {
//   for (var i = 0; i < hours.length; i++) {
//     var thisHour = hours[i].dataset.hour;
//     if (thisHour < hourNow) {
//       hours[i].classList.add(".past");
//     } else if (thisHour === hourNow) {
//       hours[i].classList.add(".present");
//     } else (thisHour > hourNow); {
//       hours[i].classList.add(".future");
//     }
//   }
// }
// timeOf();


