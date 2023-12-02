var slideindex=1;
showDiv(slideindex);

function plusDivs(n) {
    showDiv(slideindex += n);
}

function showDiv(n) {
    var i;
    var x = document.getElementsByClassName("slideshow");

    if (n>x.length) {
        slideindex = 1;
    }

    if (n<1) {
        slideindex.length = x.length;
    }
    for (i=0; i<x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideindex-1].style.display = "block"
}