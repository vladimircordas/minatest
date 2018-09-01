$(document).ready(function() {

    var section1Btn = document.getElementById("section1Btn");
    var section2Btn = document.getElementById("section2Btn");
    var section3Btn = document.getElementById("section3Btn");

    section1Btn.onclick = function() {
        TweenMax.to(window, 1, {scrollTo:0});
    }

    section2Btn.onclick = function() {
        TweenMax.to(window, 1, {scrollTo:{y:"#tretman2", offsetY:64}});
    }

});