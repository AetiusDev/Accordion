$(document).ready(function() {
    $(".accordion__item__button").on("click", function() {
        $(this)
            .closest(".accordion__item")
            .siblings(".accordion__item--active")
            .removeClass("accordion__item--active");
        $(this)
            .closest(".accordion__item")
            .toggleClass("accordion__item--active");
    });
});
