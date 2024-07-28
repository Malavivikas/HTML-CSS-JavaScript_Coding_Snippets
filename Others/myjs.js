$(function() {
    var availableTags = [
        "Birthday", "Breakfast", "Babyshower",
        "Marriage", "Auction", "Audition", "Annyvarsary", "Auditorium", "Brunch", "Breakfast", "Class", "Church",
        "Dance Shoot", "Discussion", "Dance class", "Engagement Party", "Event", "Dinner",
        "Photoshoot", "Office Party", "Office Meeting"
    ];
    $("#tags").autocomplete({
        source: availableTags
    });
    // $('.navbar-dark .navbar-nav .nav-link').css('color', 'white');
    // $('.navbar-brand').css('color', 'white');
    // $('.jclass').css('color', 'white');
});


$(function() {
    var availableTags = [
        "Berlin", "Paris", "London", "Atlanta", "Austin",
        "New York City", "Shikago", "Boston", "Austin", "Chandigarh,India", "Aagra,India",
        "Dublin,CA,USA", "Silicon Vally", "Boston", "Miami", "Sand Diago", "San Francisco"
    ];
    $("#where").autocomplete({
        source: availableTags
    });
});
// $(function() {
//     var availableTags = [
//         "10-50", "50-100", "100-150", "150-300", "300-500", "500-1000"
//     ];
//     $("#guests").autocomplete({
//         source: availableTags
//     });
// });

$('input[id="guests"]').autocomplete({
    source: ["10-50", "50-100", "100-150", "150-300", "300-500", "500-1000"],
    minLength: 0,
}).focus(function() {
    $(this).autocomplete("search");
});


$('input[name="when"]').daterangepicker({
    timePicker: true,
    startDate: moment().startOf('hour'),
    endDate: moment().startOf('hour').add(32, 'hour'),
    locale: {
        format: 'MMMM D, hh:mm A'
    }
});

// $(window).scroll(function() {
//     if ($(document).scrollTop() > 50) {
//         $('nav').addClass('bg-light');
//         $('.navbar-dark .navbar-nav .nav-link').css('color', 'black');
//         $('.navbar-brand').css('color', 'black');
//         $('.jclass').css('color', 'black');
//     } else {
//         $('nav').removeClass('bg-light');
//         $('.navbar-dark .navbar-nav .nav-link').css('color', 'white');
//         $('.navbar-brand').css('color', 'white');
//         $('.jclass').css('color', 'white');
//     }
// });
// $(window).resize(function() {
//     if ($(window).width() <= 768) {
//         $(window).scroll(function() {
//             if ($(document).scrollTop() > 50) {
//                 $('ul.navbar-nav.ml-auto').css('background-color', '');
//             } else {
//                 $('ul.navbar-nav.ml-auto').css('background-color', '#1a4668');
//             }
//         });
//     } else {
//         $('ul.navbar-nav.ml-auto').css('background-color', 'transparent');
//     }
// }).resize();

$('input[id="where"]').focus(function() {
    $(this).attr('placeholder', 'Enter city and zip code')
}).blur(function() {
    $(this).attr('placeholder', 'Where?')
})


$(document).ready(function() {

    var items = ["Bounce House", "Cake Bakery", "DJ", "Face Paint", "Floral Department", "Food Catering", "Furniture or Chair Rental", "Hair Stylist", "Henna Tattoo", "Hookah Catering", "Lighting", "Limousine", "Make-Up Artist", "Musical Instrument Artist", "Photo Booth", "Photography", "Security", "Videographer"],
        $text = $('.words'),
        delay = 5;

    function loop(delay) {
        $.each(items, function(i, elm) {
            $text.delay(delay * 1E3).fadeOut();
            $text.queue(function() {
                $text.html(items[i]);
                $text.dequeue();
            });
            $text.fadeIn();
            $text.queue(function() {
                if (i == items.length - 1) {
                    loop(delay);
                }
                $text.dequeue();
            });
        });
    }

    loop(delay);

});