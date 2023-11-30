document.addEventListener('DOMContentLoaded', function() {
    const headerImg = document.querySelector('.right-side-img');
    const body = document.querySelector('body');

    body.addEventListener('mousemove', function(event) {
        const x = event.clientX / 50;
        const y = event.clientY / 50;
        headerImg.style.top = `${x}px`
        headerImg.style.left = `-${y}px`
    });
});