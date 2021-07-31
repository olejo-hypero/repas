<script>
      $(document).ready(function(){
        $('#login-trigger').click(function(){
          $(this).next('#login-content').slideToggle();
          $(this).toggleClass('active');          
          
          if ($(this).hasClass('active')) $(this).find('span').html('<i class="fa fa-user" aria-hidden="true"></i>')
            else $(this).find('span').html('<i class="fa fa-user" aria-hidden="true"></i>')
          })
      });
  </script>

    <script>
var priceList = {
    "001" : {"id" : "001", "subid" : {}, "name" : "IPhone 5", "price" : "2500"},
    "002" : {"id" : "002", "subid" : {}, "name" : "IPad MINI", "price" : "10500"}    
    };
</script>   

<script>
var cart;
var config;
var wiNumInputPrefID;

$(document).ready(function(){  
  
    cart = new WICard("cart");
    cart.init("basketwidjet", config);
    
    
});    
document.addEventListener('visibilitychange', function(e) {
cart.init("basketwidjet", config);
}, false);
</script>

<script>
  jQuery(function($) {
          $(window).scroll(function(){
              if($(this).scrollTop()>80){
                  $('#nav-bottom-nav').addClass('fixed');
              }
              else if ($(this).scrollTop()<140){
                  $('#nav-bottom-nav').removeClass('fixed');
              }
          });
      });
</script>

<script type="text/javascript">
  ymaps.ready(init);
function init() {
var geolocation = ymaps.geolocation;
if (geolocation) {
    $("#user-city").html(geolocation.country + ', ' + geolocation.region + ', ' + geolocation.city);
} else {
    console.log('Не удалось установить местоположение');
}
}
</script>

<script>
      var owl = $('.owl-carousel');
      owl.owlCarousel({
        margin: 0,
        loop: true,
        nav:true,
        autoplay:true, //Автозапуск слайдера
    autoplayTimeout:5500, //Время смены слайда
        responsive: {
          0: {
            items: 3
          },
          600: {
            items: 3
          },
          1000: {
            items: 3
          }
        }
      })
    </script>

    <script>
      var owl = $('.owl-carousel');
      owl.owlCarousel({
        margin: 0,
        loop: true,
        nav:true,
        dots: true,
        autoplay:true,
        autoPlaySpeed: 4000,
        autoplayTimeout:4000,
        navText:[''],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      })
    </script>

    <script>
        $(document).ready(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
  var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
      return false; // выключаем стандартное действие
    });
});
        </script>

        <script>
      $(document).ready(function(){
    var show = true;
    var countbox = "#advantage-section";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
 
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
 
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
 
        if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                duration: 3000
            });
 
            show = false;
        }
    });
});
      </script>

      <script>
      var owl = $('.owl-carousel');
      owl.owlCarousel({
        margin: 0,
        loop: true,
        nav:true,
        autoplay:true, //Автозапуск слайдера
    autoplayTimeout:5500, //Время смены слайда
    navText:['<i class="fa fa-caret-left" aria-hidden="true"></i>', '<i class="fa fa-caret-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 3
          },
          600: {
            items: 3
          },
          1000: {
            items: 3
          }
        }
      })
    </script>

    <script type="text/javascript">
              $(document).ready(function(){

              $(window).scroll(function(){
              if ($(this).scrollTop() > 100) {
              $('.vverh').fadeIn();
              } else {
              $('.vverh').fadeOut();
              }
              });

              $('.vverh').click(function(){
              $("html, body").animate({ scrollTop: 0 }, 800);
              return false;
              });

              });
              </script>

              <script>
    $(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
  $('a.go').click( function(event){ // лoвим клик пo ссылки с id="go"
    event.preventDefault(); // выключaем стaндaртную рoль элементa
    $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
      function(){ // пoсле выпoлнения предъидущей aнимaции
        $('#modal_form') 
          .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
          .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    });
  });
  /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
  $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
    $('#modal_form')
      .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
        function(){ // пoсле aнимaции
          $(this).css('display', 'none'); // делaем ему display: none;
          $('#overlay').fadeOut(400); // скрывaем пoдлoжку
        }
      );
  });
});
</script>