(function () {
    let button = document.querySelector(".burger");
    button.addEventListener('click', () => {
        button.classList.toggle('burgerClose')
    })
})();

(function () {
    let seeMore = document.querySelector(".seeMore");
    let workHide = document.querySelectorAll(".workHide");
    seeMore.addEventListener('click', () => {
        seeMore.classList.toggle('seeLess');
        workHide.forEach(w => w.classList.toggle('work'));
    })
})();

$('.seeMore').click(function(){
    const id = $(this).attr('href');
    const offset = $(id).offset().top;
    $('html').animate({
        scrollTop: offset
    }, 500)
})