menu.onclick = function myFunction() {
    let x = document.getElementById('myTopnav');
    if (x.className === "topnav") {
        x.className += " responsive"
    } else {
        x.className = "topnav"
    }
};

/*$(document).ready(function(){
    $("#myTopnav").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        let id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});*/
