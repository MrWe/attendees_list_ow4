if (location.href.includes("online.ntnu.no/events")) {
  var interval = setInterval(setNames, 100);
}

function setNames() {

  let attendee_list = $('#attendee_list');


  if (attendee_list != "") {

    $('.event-details-single-image').prepend('<td></td>')

    $('.event-details-single-image').prepend("<p>Medlemmer som skal </p>");

    $('#attendee_list > tr').each((x, y) =>{
      $('.event-details-single-image > td').prepend(y)
    });


    $('.event-details-single-image > p').css({
    'color': '#ee7810',
    'font-size': '15px',
    'font-weight': '300',
    'text-align': 'center'});

    $('.event-details-single-image').css( "background-color", "#d6eaff" );
    $('.event-details-single-image > td').css({
      "padding": "5px"});


    clearInterval(interval);
  }
}
