$(document).ready(function() {

    var tretman1 = $('#tretman1');
    var tretman1thumb = $('#tretman1thumb');
    var tretman2 = $('#tretman2');
    var tretman2thumb = $('#tretman2thumb');
    var tretman3 = $('#tretman3');
    var tretman3thumb = $('#tretman3thumb');
    var tretman4 = $('#tretman4');
    var tretman4thumb = $('#tretman4thumb');
    var tretman5 = $('#tretman5');
    var tretman5thumb = $('#tretman5thumb');
    inView.threshold(0.48);

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

    inView('#tretman4')
        .on('enter', el => {
            tretman4.addClass('is-active');
            tretman4thumb.addClass('is-active');
            tretman4thumb.prev('li').addClass('before');
            tretman4thumb.next('li').addClass('before')
        })
        .on('exit', el => {
            tretman4.removeClass('is-active');
            tretman4thumb.removeClass('is-active');
            tretman4thumb.prev('li').removeClass('before');
            tretman4thumb.next('li').removeClass('before')
        });

    inView('#tretman5')
        .on('enter', el => {
            tretman5.addClass('is-active');
            tretman5thumb.addClass('is-active');
            tretman5thumb.prev('li').addClass('before');
            tretman5thumb.next('li').addClass('before')
        })
        .on('exit', el => {
            tretman5.removeClass('is-active');
            tretman5thumb.removeClass('is-active');
            tretman5thumb.prev('li').removeClass('before');
            tretman5thumb.next('li').removeClass('before')
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

    $('#messages').on('click', function(e) {
        $('#msgr').addClass('active');
    });


});