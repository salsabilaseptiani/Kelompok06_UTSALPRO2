(function($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    $.fn.counterUp = function (options) { 
        var settings = $.extend({ 
            time: 400, 
            delay: 10, 
            offset: 100, 
            beginAt: 0, 
            formatter: false, 
            context: "window", 
            callback: function () { } }, options), s; 
            return this.each(function () { 
                var $this = $(this), 
                counter = { 
                    time: $(this).data("counterup-time") || settings.time, 
                    delay: $(this).data("counterup-delay") || settings.delay, 
                    offset: $(this).data("counterup-offset") || settings.offset,
                    beginAt: $(this).data("counterup-beginat") || settings.beginAt, 
                    context: $(this).data("counterup-context") || settings.context }; 
                var counterUpper = function () { var nums = []; 
                var divisions = counter.time / counter.delay; 
                var num = $(this).attr("data-num") ? $(this).attr("data-num") : $this.text(); 
                var isComma = /[0-9]+,[0-9]+/.test(num); num = num.replace(/,/g, ""); 
                var decimalPlaces = (num.split(".")[1] || []).length; 
                    if (counter.beginAt > num) counter.beginAt = num; 
                var isTime = /[0-9]+:[0-9]+:[0-9]+/.test(num); 
                    if (isTime) { var times = num.split(":"), m = 1; s = 0; 
                    while (times.length > 0) { s += m * parseInt(times.pop(), 10); m *= 60 } } 
                    for (var i = divisions; i >= counter.beginAt / num * divisions; i--) { var newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces); if (isTime) { newNum = parseInt(s / divisions * i); var hours = parseInt(newNum / 3600) % 24; var minutes = parseInt(newNum / 60) % 60; var seconds = parseInt(newNum % 60, 10); newNum = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) } if (isComma) { while (/(\d+)(\d{3})/.test(newNum.toString())) { newNum = newNum.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2") } } if (settings.formatter) { newNum = settings.formatter.call(this, newNum) } nums.unshift(newNum) } $this.data("counterup-nums", nums); $this.text(counter.beginAt); var f = function () { if (!$this.data("counterup-nums")) { settings.callback.call(this); return } $this.html($this.data("counterup-nums").shift()); if ($this.data("counterup-nums").length) { setTimeout($this.data("counterup-func"), counter.delay) } else { $this.data("counterup-nums", null); $this.data("counterup-func", null); settings.callback.call(this) } }; $this.data("counterup-func", f); setTimeout($this.data("counterup-func"), counter.delay) }; $this.waypoint(function (direction) { counterUpper(); this.destroy() }, { offset: counter.offset + "%", context: counter.context }) }) } 


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

})(jQuery);
