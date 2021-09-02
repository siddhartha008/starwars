let bg = document.getElementById('bg');
let names = document.getElementById('name');
let cloud = document.getElementById('cloud');
let hansolo = document.getElementById('hansolo');
let header = document.querySelector("header");
let logo = document.getElementById("logoLeft");
let lbsaber = document.getElementById("darth-vader-example");
let menuBox = document.getElementById("men-items");
let mobileMenu = document.getElementById('men-items');
let width = visualViewport.width;
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
let visible = true;
let lsaberSound = false;


btn.addEventListener("click", () => {
    visible = !visible;
    if (visible) {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
});

var onresize = function () {
    width = document.body.clientWidth;
    height = document.body.clientHeight;

    if (width <= 767) {
        menuBox.style.display = "none";
    }
    else {
        menuBox.style.display = "flex";
        menu.style.display = "none";
    }
}
window.addEventListener("resize", onresize);

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    cloud.style.left = value * 1.25 + 'px';
    names.style.top = 85 + value * 1.05 + 'px';
    bg.style.top = value * 0.5 + 'px';
    if (width <= 767) {
        hansolo.style.right = value * 0.5 + 'px';
        hansolo.style.transform = 'translateX(' + (value * 0.5) + 'px) translateY(' + (value * 0.5) + 'px)';
    } else {
        hansolo.style.right = value * 1.75 + 'px';
        hansolo.style.transform = 'translateX(' + (value * 0.5) + 'px) translateY(' + (value * 0.5) + 'px)';
    }

});

lbsaber.addEventListener('click', function () {
    if (this.checked && width > 768) {
        document.getElementById("audio").play();
        menuBox.style.display = "flex";
        menu.style.display = "none";
    } else {
        document.getElementById("audio").pause();
        menuBox.style.display = "none";
    }
});

$("a[href='#top']").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});



