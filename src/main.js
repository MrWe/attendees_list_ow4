let counter = 0;

if (location.href.includes("online.ntnu.no/events")) {
  var interval = setInterval(setNames, 50);
}

function showMembers() {
  let container = $('.event-details-single-image').length != 0
    ? '.event-details-single-image'
    : '.event-status-companies-container';

  $(container).prepend("<div class='col-md-12'> </div>");
  $(container + ' > .col-md-12').prepend("<div class='event-access'>  </div>");
  $(container + ' > .col-md-12 > .event-access').append("<p class='access-title'> Påmeldte </p>");
  $(container + ' > .col-md-12 > .event-access').append("<div class='rules'> </div>");

  $('#attendee_list > tr').each((x, y) => {
    $(container + ' > .col-md-12 > .event-access > .rules').append('<span class="label label-info wiker">' + $(y).text().replace(/ /g, ' ') + '</span>');
  });

  $(container + ' > .col-md-12').css('background-color', '#d6eaff');

  $('.rules > .wiker').css({'word-wrap': 'normal', 'display': 'inline-block', 'white-space': '', 'margin': '1px 2px', 'line-height': '13px'});

}

function setNames() {

  let attendee_list = $('#attendee_list > tr');

  if (attendee_list.length != 0) {
    showMembers();
    clearInterval(interval);
  } else if (counter > 50) {
    clearInterval(interval);
  }
  counter += 1
}
