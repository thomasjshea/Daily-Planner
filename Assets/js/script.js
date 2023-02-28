// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // Adds click event listener to save buttons
  $('.saveBtn').on('click', function(){
    // Navigate DOM to the parent and get the ID for each timeblock
    var timeBlock = parseInt($(this).parent().attr('id'))
    // Navigate DOM to the textarea and get the value from the textarea
    var task = $(this).parent().children().eq(1).val()
    // Save the Time-Block and the task to locak storage
    localStorage.setItem(timeBlock, task)
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // Calls the time block class and gives a function for each div containing this class
  $('.time-block').each(function(){
    // Calls the current time from DayJS
    var currentHour = dayjs().hour();
    // Navigate DOM to get the ID
    var hour = parseInt($(this).attr('id'));
    // Conditional statement:
    // if the id of the time-block is less than the current time (in the past) apply the 'past' class
       if (hour < currentHour){
      $(this).addClass('past');
      $(this).removeClass('present');
      $(this).removeClass('future');
   // if the id of the time-block is greater than the current time (in the future) apply 'future' class 
    } else if (hour > currentHour){
      $(this).addClass('future');
      $(this).removeClass('present');
      $(this).removeClass('past');
   // apply 'present' class for the current hour
    } else {
      $(this).addClass('present');
      $(this).removeClass('past');
      $(this).removeClass('future');
    }
  })
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // call the 'description' class in jQuery
  $('.description').each(function(){
    // navigate DOM to get the id for the time-block
    var timeBlock = parseInt($(this).parent().attr('id'))
    // get tasks from local storage
    var description = localStorage.getItem(timeBlock)
    // set the text in the text-areas to what is retrieved from local storage
    $(this).text(description)
  })

  // TODO: Add code to display the current date in the header of the page.

  // Get the current day in the required format from DayJS
  var currentDay = dayjs().format('dddd, MMMM D');
  // Set the text of 'currentDay' in the header to what is pulled from DayJS
  $('#currentDay').text(currentDay);
});
