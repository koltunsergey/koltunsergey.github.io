// nav menu jquery
(function ($) {
    $(function () {
        $('.menu-btn').on('click', function () {
            $(this).closest('.main-menu')
                .toggleClass('menu-open');
        });

        $('a').on('click', function () {
            // do something

            $(this).closest('.main-menu')
                .removeClass('menu-open');
        });
    });
})(jQuery);


// video controls
function init() {
    vid = document.getElementById('video');
}
document.addEventListener("DOMContentLoaded", init, false);
let btn = document.getElementById('playbtn');
let vid = document.getElementById('video');
vid.onplay = function () {
    btn.classList.add('btn-play-hide');
};

// slider with logos
$(document).ready(function () {
    $('.slider-logo').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }]
    });
});


// slider with testemonials
$(document).ready(function () {
    $('.slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                }
            }
        ]
    });
});

// filter for portfolio
filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("work");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}
// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}
// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
};

// counter

$('.counter').counterUp({
    delay: 10,
    time: 2000
});


// const el = document.querySelector('.count-number')
// new Waypoint({
//     element: el,
//     handler: function () {
//         counterUp(el)
//         this.destroy()
//     },
//     offset: 'bottom-in-view'
// })
