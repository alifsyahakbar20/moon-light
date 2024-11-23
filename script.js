let star = document.getElementById('star');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let btn = document.getElementById('btn');
let text = document.getElementById('text');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    star.style.left = value * 0.5 + 'px';
    moon.style.top = value * 1.5 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 2 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
});