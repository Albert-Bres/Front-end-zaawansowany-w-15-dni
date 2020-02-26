$('.interface').on("click", function () {
    // console.log(this);
    // console.log($(this).attr("class"))

    if ($(this).hasClass("orange")) {
        // $('body').css("background-color", "orange");
        $('body').attr("class", "orange");
    }
    if ($(this).hasClass("green")) {
        // $('body').css("background-color", "green");
        $('body').attr("class", "green");
    }
    if ($(this).hasClass("increase")) {
        $('.text').animate({
            "font-size": "+=2"
        }, 500)
    }
    if ($(this).hasClass("move")) {
        $('.text').animate({
            "left": "+=15",
            "letter-spacing": "+=2px"
        }, 500)
    }

})