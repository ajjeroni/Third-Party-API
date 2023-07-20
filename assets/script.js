//current day is displayed
var currentDay = dayjs();
$("#currentDay").text(currentDay.format("MMM D, YYYY"));

//time blocks for hours 9am - 5pm 
var currentTime = dayjs();
console.log(currentTime.format('h a'))

var nineAM = dayjs().set('hour', 9).set('minute', 0).set('second', 0).set('millisecond', 0);
var nineCheck1 = dayjs(nineAM).isBefore(dayjs(currentTime))
var nineCheck2 = nineAM.hour() === currentTime.hour()
var nineCheck3 = dayjs(nineAM).isAfter(dayjs(currentTime))
if (nineCheck1) { 
  $('#hour-9').addClass("past");
} 
if (nineCheck2) { 
  $('#hour-9').addClass("present");
}
if (nineCheck3) { 
  $('#hour-9').addClass("future");
}

var tenAM = dayjs().set('hour', 10).set('minute', 0).set('second', 0).set('millisecond', 0);
var tenCheck1 = dayjs(tenAM).isBefore(dayjs(currentTime))
var tenCheck2 = tenAM.hour() === currentTime.hour()
var tenCheck3 = dayjs(tenAM).isAfter(dayjs(currentTime))
if (tenCheck1) { 
  $('#hour-10').addClass("past");
} 
if (tenCheck2) { 
  $('#hour-10').addClass("present");
}
if (tenCheck3) { 
  $('#hour-10').addClass("future");
}

var elevenAM = dayjs().set('hour', 11).set('minute', 0).set('second', 0).set('millisecond', 0);
var elevenCheck1 = dayjs(elevenAM).isBefore(dayjs(currentTime))
var elevenCheck2 = elevenAM.hour() === currentTime.hour()
var elevenCheck3 = dayjs(elevenAM).isAfter(dayjs(currentTime))
if (elevenCheck1) { 
  $('#hour-11').addClass("past");
} 
if (elevenCheck2) { 
  $('#hour-11').addClass("present");
}
if (elevenCheck3) { 
  $('#hour11').addClass("future");
}

var twelvePM = dayjs().set('hour', 12).set('minute', 0).set('second', 0).set('millisecond', 0);
var twelveCheck1 = dayjs(twelvePM).isBefore(dayjs(currentTime))
var twelveCheck2 = twelvePM.hour() === currentTime.hour()
var twelveCheck3 = dayjs(twelvePM).isAfter(dayjs(currentTime))
if (twelveCheck1) { 
  $('#hour-12').addClass("past");
} 
if (twelveCheck2) { 
  $('#hour-12').addClass("present");
}
if (twelveCheck3) { 
  $('#hour-12').addClass("future");
}

var onePM = dayjs().set('hour', 13).set('minute', 0).set('second', 0).set('millisecond', 0);
var oneCheck1 = dayjs(onePM).isBefore(dayjs(currentTime))
var oneCheck2 = onePM.hour() === currentTime.hour()
var oneCheck3 = dayjs(onePM).isAfter(dayjs(currentTime))
if (oneCheck1) { 
  $('#hour-1').addClass("past");
} 
if (oneCheck2) { 
  $('#hour-1').addClass("present");
}
if (oneCheck3) { 
  $('#hour-1').addClass("future");
}

var twoPM = dayjs().set('hour', 14).set('minute', 0).set('second', 0).set('millisecond', 0);
var twoCheck1 = dayjs(twoPM).isBefore(dayjs(currentTime))
var twoCheck2 = twoPM.hour() === currentTime.hour()
var twoCheck3 = dayjs(twoPM).isAfter(dayjs(currentTime))
if (twoCheck1) { 
  $('#hour-2').addClass("past");
} 
if (twoCheck2) { 
  $('#hour-2').addClass("present");
}
if (twoCheck3) { 
  $('#hour-2').addClass("future");
}

var threePM = dayjs().set('hour', 15).set('minute', 0).set('second', 0).set('millisecond', 0);
var threeCheck1 = dayjs(threePM).isBefore(dayjs(currentTime))
var threeCheck2 = threePM.hour() === currentTime.hour()
var threeCheck3 = dayjs(threePM).isAfter(dayjs(currentTime))
if (threeCheck1) { 
  $('#hour-3').addClass("past");
} 
if (threeCheck2) { 
  $('#hour-3').addClass("present");
}
if (threeCheck3) { 
  $('#hour-3').addClass("future");
}

var fourPM = dayjs().set('hour', 16).set('minute', 0).set('second', 0).set('millisecond', 0);
var fourCheck1 = dayjs(fourPM).isBefore(dayjs(currentTime))
var fourCheck2 = fourPM.hour() === currentTime.hour()
var fourCheck3 = dayjs(fourPM).isAfter(dayjs(currentTime))
if (fourCheck1) { 
  $('#hour-4').addClass("past");
} 
if (fourCheck2) { 
  $('#hour-4').addClass("present");
}
if (fourCheck3) { 
  $('#hour-4').addClass("future");
}

var fivePM = dayjs().set('hour', 17).set('minute', 0).set('second', 0).set('millisecond', 0);
var fiveCheck1 = dayjs(fivePM).isBefore(dayjs(currentTime))
var fiveCheck2 = fivePM.hour() === currentTime.hour()
var fiveCheck3 = dayjs(fivePM).isAfter(dayjs(currentTime))
if (fiveCheck1) { 
  $('#hour-5').addClass("past");
} 
if (fiveCheck2) { 
  $('#hour-5').addClass("present");
}
if (fiveCheck3) { 
  $('#hour-5').addClass("future");
}
//click the save button for that time block
var saved9 = localStorage.getItem("text9");
$('#myTextArea9').text(saved9)
$(document).ready(function() {
  $('#nine').on('click', function() {
    var textareaValue9 = $('#myTextArea9').val();
    localStorage.setItem("text9", textareaValue9);
  });
});

var saved10 = localStorage.getItem("text10");
$('#myTextArea10').text(saved10)
$(document).ready(function() {
  $('#ten').on('click', function() {
    var textareaValue10 = $('#myTextArea10').val();
    localStorage.setItem("text10", textareaValue10);
  });
});

var saved11 = localStorage.getItem("text11");
$('#myTextArea11').text(saved11)
$(document).ready(function() {
  $('#eleven').on('click', function() {
    var textareaValue11 = $('#myTextArea11').val();
    localStorage.setItem("text11", textareaValue11);
  });
});

var saved12 = localStorage.getItem("text12");
$('#myTextArea12').text(saved12)
$(document).ready(function() {
  $('#twelve').on('click', function() {
    var textareaValue12 = $('#myTextArea12').val();
    localStorage.setItem("text12", textareaValue12);
  });
});

var saved1 = localStorage.getItem("text1");
$('#myTextArea1').text(saved1)
$(document).ready(function() {
  $('#one').on('click', function() {
    var textareaValue1 = $('#myTextArea1').val();
    localStorage.setItem("text1", textareaValue1);
  });
});

var saved2 = localStorage.getItem("text2");
$('#myTextArea2').text(saved2)
$(document).ready(function() {
  $('#two').on('click', function() {
    var textareaValue2 = $('#myTextArea2').val();
    localStorage.setItem("text2", textareaValue2);
  });
});

var saved3 = localStorage.getItem("text3");
$('#myTextArea3').text(saved3)
$(document).ready(function() {
  $('#three').on('click', function() {
    var textareaValue3 = $('#myTextArea3').val();
    localStorage.setItem("text3", textareaValue3);
  });
});

var saved4 = localStorage.getItem("text4");
$('#myTextArea4').text(saved4)
$(document).ready(function() {
  $('#four').on('click', function() {
    var textareaValue4 = $('#myTextArea4').val();
    localStorage.setItem("text4", textareaValue4);
  });
});

var saved5 = localStorage.getItem("text5");
$('#myTextArea5').text(saved5)
$(document).ready(function() {
  $('#five').on('click', function() {
    var textareaValue5 = $('#myTextArea5').val();
    localStorage.setItem("text5", textareaValue5);
  });
});



