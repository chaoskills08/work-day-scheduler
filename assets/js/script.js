var hours = document.getElementById('time-block');
var saveBtn = document.getElementsByClassName('button.col-1.saveBtn');

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

saveBtn.onclick = function (event) {
  console.log('dingus')
  event.preventDefault();

  var eventInfo = $(this).siblings("textarea").value
  localStorage.setItem("textarea", eventInfo);
}