
document.querySelector("#open-popup").addEventListener('click', function () {
    document.body.classList.add('active-popup');
});

document.querySelector(".close-btn").addEventListener('click', function () {
    document.body.classList.remove('active-popup');
});