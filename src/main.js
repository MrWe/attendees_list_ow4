let counter = 0;

if (location.href.includes("online.ntnu.no/events")) {
  var interval = setInterval(setNames, 50);
}

function showMembers(){
    $('.event-details-single-image').css("background-color", "#d6eaff");

    $('.event-details-single-image').prepend("<div class='col-md-12'> </div>");
    $('.event-details-single-image > .col-md-12').prepend("<div class='event-access'>  </div>");
    $('.event-details-single-image > .col-md-12 > .event-access').append("<p class='access-title'> Medlemmer som skal </p>");
    $('.event-details-single-image > .col-md-12 > .event-access').append("<div class='rules'> </div>");

    $('#attendee_list > tr').each((x, y) => {
      $('.event-details-single-image > .col-md-12 > .event-access > .rules').append('<span class="label label-info wiker">' + $(y).text().replace(/ /g,' ') + '</span>');
    });


    $('.rules > .wiker').css({
      'word-wrap': 'normal',
      'display': 'inline-block',
      'white-space': '',
      'margin': '1px 2px',
      'line-height': '13px'
    });
}

function setNames() {

  let attendee_list = $('#attendee_list > tr');

  if (attendee_list.length != 0) {
    showMembers();
    clearInterval(interval);
  }
  else if(counter > 50){
    clearInterval(interval);
  }
  counter += 1
}
