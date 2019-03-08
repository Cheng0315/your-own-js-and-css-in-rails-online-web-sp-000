function hideWhenClicked(event) {
  let target = $(event.target);
  target.hide();
}

$('#hide_me').click(hideWhenClick);