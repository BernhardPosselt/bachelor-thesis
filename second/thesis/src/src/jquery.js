(function ($, undefined){
  $(document).ready(function() {

    $.get('http://myurl.com/request.php', function(data) {
      if (data.isValid) {
        $('#field').text('The request was successful');
      } else {
        $('#field').text('The request was not successful');
      }
    });

  });
})(jQuery);