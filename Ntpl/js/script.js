$(document).on('click','button.navbar-toggler', function () {
  $(this).parent().toggleClass('openmenu');
  $('body').toggleClass('open-model')
})
