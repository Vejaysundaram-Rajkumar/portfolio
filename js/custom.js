(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.querySelector('.category-toggle input[type="checkbox"]');
  const cardContainer = document.getElementById('card-container');
  const allCards = cardContainer.querySelectorAll('.card');
  
  checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
          // Show skills cards, hide achievements cards
          allCards.forEach(card => {
              if (card.dataset.category === 'skills') {
                  card.style.display = 'block';
              } else if (card.dataset.category === 'achievements') {
                  card.style.display = 'none';
              }
          });
      } else {
          // Show achievements cards, hide skills cards
          allCards.forEach(card => {
              if (card.dataset.category === 'achievements') {
                  card.style.display = 'block';
              } else if (card.dataset.category === 'skills') {
                  card.style.display = 'none';
              }
          });
      }
  });
});
