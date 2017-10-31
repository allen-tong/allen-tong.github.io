/* Source: https://css-tricks.com/snippets/jquery/smooth-scrolling/
   Credit to user "samuel Kyama" */
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 500);
});
