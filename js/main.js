$('[data-target="messenger"]').on("click", function() {
    var e = $("#msgr")
        , t = $("#msgr-wrapper");
    return e.hasClass("active") ? (t.find(".msgr-content").fadeOut(),
    e.fadeOut(300).removeClass("active")) : e.fadeIn(300, function() {
        t.find(".msgr-content").fadeIn(400)
    }).addClass("active"),
    !1
});