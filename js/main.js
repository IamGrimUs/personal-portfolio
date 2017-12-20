$(document).ready(function() {
  $('.readMoreButton').click(function() {
    $(this)
      .toggleClass('show')
      .toggleClass('hidden');
    $('.moreText')
      .toggleClass('show')
      .toggleClass('hidden');
    $('.readLessButton')
      .toggleClass('show')
      .toggleClass('hidden');
  });
  $('.readLessButton').click(function() {
    $(this)
      .toggleClass('show')
      .toggleClass('hidden');
    $('.moreText')
      .toggleClass('show')
      .toggleClass('hidden');
    $('.readMoreButton')
      .toggleClass('show')
      .toggleClass('hidden');
  });
});
