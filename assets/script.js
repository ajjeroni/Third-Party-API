//current day is displayed
var currentDay = dayjs();
$("#currentDay").text(currentDay.format("MMM D, YYYY"));

//time blocks for hours 9am - 5pm 
var currentTime = dayjs();
console.log(currentTime.format('h a'))

var nineAM = dayjs().set('hour', 9).set('minute', 0).set('second', 0).set('millisecond', 0);
console.log(dayjs(nineAM).isBefore(dayjs(currentTime)))
var nineCheck1 = dayjs(nineAM).isBefore(dayjs(currentTime))
var nineCheck2 = dayjs(nineAM).isSame(dayjs(currentTime))
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
console.log(dayjs(tenAM).isBefore(dayjs(currentTime)))
var tenCheck1 = dayjs(tenAM).isBefore(dayjs(currentTime))
var tenCheck2 = dayjs(tenAM).isSame(dayjs(currentTime))
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
console.log(dayjs(elevenAM).isBefore(dayjs(currentTime)))
var elevenCheck1 = dayjs(elevenAM).isBefore(dayjs(currentTime))
var elevenCheck2 = dayjs(elevenAM).isSame(dayjs(currentTime))
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
console.log(dayjs(twelvePM).isBefore(dayjs(currentTime)))
var twelveCheck1 = dayjs(twelvePM).isBefore(dayjs(currentTime))
var twelveCheck2 = dayjs(twelvePM).isSame(dayjs(currentTime))
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
console.log(dayjs(onePM).isBefore(dayjs(currentTime)))
var oneCheck1 = dayjs(onePM).isBefore(dayjs(currentTime))
var oneCheck2 = dayjs(onePM).isSame(dayjs(currentTime))
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
console.log(dayjs(twoPM).isBefore(dayjs(currentTime)))
var twoCheck1 = dayjs(twoPM).isBefore(dayjs(currentTime))
var twoCheck2 = dayjs(twoPM).isSame(dayjs(currentTime))
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
console.log(dayjs(threePM).isBefore(dayjs(currentTime)))
var threeCheck1 = dayjs(threePM).isBefore(dayjs(currentTime))
var threeCheck2 = dayjs(threePM).isSame(dayjs(currentTime))
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
console.log(dayjs(fourPM).isBefore(dayjs(currentTime)))
var fourCheck1 = dayjs(fourPM).isBefore(dayjs(currentTime))
var fourCheck2 = dayjs(fourPM).isSame(dayjs(currentTime))
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
console.log(dayjs(fivePM).isSame(dayjs(currentTime, 'hour')))
var fiveCheck1 = dayjs(fivePM).isBefore(dayjs(currentTime))
var fiveCheck2 = dayjs(fivePM).isSame(dayjs(currentTime, 'hour'))
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

var sixPM = dayjs().set('hour', 18).set('minute', 0).set('second', 0).set('millisecond', 0);
console.log(dayjs(sixPM).isSame(dayjs(currentTime, 'hh')))


