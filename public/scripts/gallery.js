if (localStorage.getItem('theme') == 'dark') {
    document.querySelector('html').toggleAttribute('data-dark-mode');
}

//from w3schools lol
var prevScrollpos = window.scrollY;
window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (window.scrollY == 0 || prevScrollpos > currentScrollPos) {
        document.querySelector("#topbar").style.top = "0";
    } else {
        document.querySelector("#topbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}