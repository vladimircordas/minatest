$(document).ready(function() {

    var tretman1 = $('#tretman1');
    var tretman1thumb = $('#tretman1thumb');
    var tretman2 = $('#tretman2');
    var tretman2thumb = $('#tretman2thumb');
    var tretman3 = $('#tretman3');
    var tretman3thumb = $('#tretman3thumb');
    inView.threshold(0.40);

    inView('#tretman1')
        .on('enter', el => {
            tretman1.addClass('is-active');
            tretman1thumb.addClass('is-active');
            tretman1thumb.prev('li').addClass('before');
            tretman1thumb.next('li').addClass('before')
        })
        .on('exit', el => {
            tretman1.removeClass('is-active');
            tretman1thumb.removeClass('is-active');
            tretman1thumb.prev('li').removeClass('before');
            tretman1thumb.next('li').removeClass('before')
        });

    inView('#tretman2')
        .on('enter', el => {
            tretman2.addClass('is-active');
            tretman2thumb.addClass('is-active');
            tretman2thumb.prev('li').addClass('before');
            tretman2thumb.next('li').addClass('before')
        })
        .on('exit', el => {
            tretman2.removeClass('is-active');
            tretman2thumb.removeClass('is-active');
            tretman2thumb.prev('li').removeClass('before');
            tretman2thumb.next('li').removeClass('before')
        });

    inView('#tretman3')
        .on('enter', el => {
            tretman3.addClass('is-active');
            tretman3thumb.addClass('is-active');
            tretman3thumb.prev('li').addClass('before');
            tretman3thumb.next('li').addClass('before')
        })
        .on('exit', el => {
            tretman3.removeClass('is-active');
            tretman3thumb.removeClass('is-active');
            tretman3thumb.prev('li').removeClass('before');
            tretman3thumb.next('li').removeClass('before')
        });

    
    // Add smooth scrolling to all links

    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();


            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 61
            }, 333);
        } // End if
    });

    


});