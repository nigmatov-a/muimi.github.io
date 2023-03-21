let mask = document.querySelector('.mask');

window.addEventListener('load' , () => {
  mask.classList.add('hide');
  setTimeout( () => {
      mask.remove();
  
   }, 3000);
  });

'use strict';

    $('.stat__count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });