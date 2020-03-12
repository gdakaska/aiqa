function isElementInViewport(el) {
    var button = document.getElementById("demo-button");
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document. documentElement.clientWidth)
    );
}

function showNavigationButton() {
    if(isElementInViewport()){
        document.getElementById("nav-demo-button").style.visibility = "hidden";
    }
}