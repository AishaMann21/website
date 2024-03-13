var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav-wrap").style.top = "0";
        } else {
        document.getElementById("nav-wrap").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    
}

function hover(element) {
    element.setAttribute('src', 'images/marvelpp.png');
}

function unhover(element) {
    element.setAttribute('src', 'https://cdn.icon-icons.com/icons2/2845/PNG/512/marvel_logo_icon_181411.png');
}

function hover2(element) {
    element.setAttribute('src', 'images/PageTunes Final Pitch (Innovation & Design Lab) (1).svg');
}

function unhover2(element) {
    element.setAttribute('src', 'images/PageTunes Logo-03.svg');
}

