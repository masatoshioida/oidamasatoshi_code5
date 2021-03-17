// ページ内リンクボタン
// $(function(){
//   // #で始まるリンクをクリックしたら実行
//   $('a[href^="#"]').click(function() {
//     // スクロールの速度
//     var speed = 800; // ミリ秒で記述
//     // アンカーの値取得
//     var href= $(this).attr("href");
//     // 移動先の取得
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     // 移動先を数値で取得
//     var position = target.offset().top;
//     // ここでスムーススクロール
//     $('body,html').animate({scrollTop:position}, speed, 'swing');
//     return false;
//   });
// });

// 要素のフワッとした表示
AOS.init();


// アコーディオンメニュー
// $(function () {
//   $(".faq_list_detail_a:not(:first-of-type)").css("display", "none");
//     $('.faq_list_detail_q').on('click', function () {
//     $(this).next().slideToggle();
//   });
// });




// formのバリデーションチェックは不要
// $(document).ready(function () {

//   const $submitBtn = $('#js-submit')
//   $('#form input,#form textarea').on('change', function () {
//     if (
//       $('#form input[type="text"]').val() !== "" &&
//       $('#form input[type="email"]').val() !== "" &&
//       // $('#form input[type="checkbox"]').val() !== "" &&
//       $('#form #privacyCheck').prop('checked') === true
//     ) {
//       $submitBtn.prop('disabled', false);

//     } else {
//       $submitBtn.prop('disabled', true);
//     }
//   });

// });


// googleformを使ったメールの自動送信は使わない
// $(document).ready(function () {

//       $('#form').submit(function (event) {
//         var formData = $('#form').serialize();
//         $.ajax({
//           url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfl-wzMi-NI_08WXel6GRVtd50l6-Fe_sa_inqj_Lf4h4hvkw/formResponse",
//           data: formData,
//           type: "POST",
//           dataType: "xml",
//           statusCode: {
//             0: function () {
//               $(".end-message").slideDown();
//               $(".button").fadeOut();
//               window.location.href = "thanks.html";
//             },
//             200: function () {
//               $(".false-message").slideDown();
//             }
//           }
//         });
//         event.preventDefault();
//       });

//     });

// ハンバーガーメニューは今回も使う
$('.gnav-btn').on('click',function(){
  $('.gnav-btn').toggleClass('open');
  $('.globalNav').toggleClass('slide-in');
  $('body').toggleClass('noscroll');
});

 $('#globalNav a[href]').on('click', function(event) {
        $('.gnav-btn').trigger('click');
    });




// スワイぱーは今回使わない
// $(document).ready(function () {
//   var mySwiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     spaceBetween: 0,
//     shortSwipes:false,
//     autoplay: {
//       delay: 5000,
//       stopOnLastSlide: true,
//       disableOnInteraction: false,
//       reverseDirection: false
//     },
//     breakpoints: {
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 10,
//         // centeredSlides: true,
//       },
//       950: {
//         slidesPerView: 3.8,
//         loop: true,
//         centeredSlides: true,
//         spaceBetween: 52,
//       }
//     }
//   });
// });




// モーダルメニュー
$(function(){
  $('.js-modal-open').on('click',function(){
    $('.js-modal').fadeIn();
    return false;
  });
  $('.js-modal-close').on('click',function(){
    $('.js-modal').fadeOut();
    return false;
  });
});


  const config = {
    minDate: "today",
    mode: "multiple"
  }
  flatpickr('.flatpickr', config);



  // たぶ切り替え

// $('#header').each(function(){
//     var $window = $(window),
//     $stickyHeader = $(this).find('.sticky-header'),//スティッキーヘッダー
//     stickyHeaderHeight = $stickyHeader.outerHeight(),//スティッキーヘッダーの高さ
//     headerHeight = $(this).outerHeight();//ヘッダー全体の高さ

//     //画面外へ
//     $stickyHeader.css({ top: '-' + stickyHeaderHeight + 'px' });

//     //ページの一番上からヘッダーの高さ分下方向にスクロールしたらtopを0に、それ以外は画面外へ
//     $window.on('scroll', function(){
//         if($window.scrollTop() > headerHeight) {
//             $stickyHeader.css({top:0});
//         } else {
//             $stickyHeader.css({ top: '-' + stickyHeaderHeight + 'px' });
//        }
//     });

//     //任意のタイミングでイベントを発生させる
//     $window.trigger('scroll');
// });



// window.addEventListener("scroll", function () {
//   var header = document.querySelector("header");
//   header.classList.toggle("scroll-nav", window.scrollY > 30);
// });



$(function() {
  let header     = $('.header');
  let headerLogo = $('.logo');
  let navLink    = $('.list_item');
  let gnavBtn    = $('.gnav-btn');

  $(window).scroll(function () {
    // 画面をトップから30px以上スクロールした時
    if ($(this).scrollTop() >= 30) {
      // ヘッダーのbackground-colorを白に変更し、boxshadowをつける
      header.css({'background':'rgba(250, 250, 250, 1)'});
      // ロゴ画像を変更
      headerLogo.attr('src', 'images/sub-header-logo.png').css('width', 200);
      // aタグで囲った文字を黒に変更
      navLink.find('a').css('color', '#333');
      // ハンバーガーメニューを黒色に変更
      gnavBtn.find('span').css({'background':'rgba(0, 0, 0, 1)'});

      // spanタグで囲った文字を黒に変更
      // navSpan.css('color', '#333');
    } else {
      // 画面がトップから100px以下の時は、上記と逆の処理を行う
      header.css({'background':'rgba(250, 250, 250, 0)'});
      headerLogo.attr('src', 'images/top-header-logo.png').css('width', 200);
      navLink.find('a').css('color', '#fff');
      gnavBtn.find('span').css({'background':'rgba(250, 250, 250, 1)'});
      // navSpan.css('color', '#fff');
      // navLink.hover(
      //   function() {
      //     $(this).find('a, span').css('color', '#fff');
      //   },
      //   function() {
      //     $(this).find('a, span').css('color', '#fff');
      //   }
      // );
    }
  });
});


// スクロールするとロゴの色変更
$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = 30;
    if (sliderHeight < $(this).scrollTop()) {
      $(".js-header").addClass("headerScroll");
    } else {
      $(".js-header").removeClass("headerScroll");
    }
  });
});


// お知らせのタブ切替
$(function() {
  $('.tab-item').click(function() {

    //現在activeが付いているクラスからactiveを外す
    $('.active').removeClass('active');

    //クリックされたタブメニューにactiveクラスを付与。
    $(this).addClass('active');

    //一旦showクラスを外す
    $('.show').removeClass('show');

    //クリックしたタブのインデックス番号取得
    const index = $(this).index();

    //タブのインデックス番号と同じコンテンツにshowクラスをつけて表示する
    $('.tab-content').eq(index).addClass('show');
    $('.tab-content').hide().eq(index).fadeIn();
  });
});


// フワッとアニメーション
// $(function(){
//    $(window).on('load scroll', function() {
//       var winScroll = $(window).scrollTop();
//       var winHeight = $(window).height();
//       var scrollPos = winScroll + (winHeight * 0.8);

//       $(".show").each(function() {
//          if($(this).offset().top < scrollPos) {
//             $(this).css({opacity: 1, transform: 'translate(0, 0)'});
//          }
//       });
//    });
// });


$(function(){
	$(window).scroll(function (){
		$('.fadeInBlock').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			var speed = 1000;
			if(scroll > elemPos - windowHeight){
				$(this).find('h3').addClass('scrollin');
				$(this).delay(speed).queue(function(){
					$(this).find('p').addClass('scrollin').dequeue();
					$(this).find('p').delay(speed).queue(function(){
						$(this).find('a').addClass('scrollin').dequeue();
					});
				});
			}
		});
	});
});
