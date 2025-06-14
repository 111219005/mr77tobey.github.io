$('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });

$(document).ready(function(){
var carousel = $("#carouselExampleControls");
var isMouseOver = false;
// 啟用輪播器
carousel.carousel({
    interval: 2000, // 自動播放間隔時間（毫秒）
    pause: "hover", // 滑鼠懸停時暫停自動播放
    wrap: false // 禁用循環播放
});
// 滑鼠懸停在輪播器上時
carousel.on("mouseenter", function(){
    isMouseOver = true;
    // 停止自動播放
    carousel.carousel("pause");
});
// 滑鼠離開輪播器時
carousel.on("mouseleave", function(){
    isMouseOver = false;
    // 如果不是點擊事件觸發的，則啟用自動播放
    if (!isClickEvent) {
        carousel.carousel("cycle");
    }
});
// 點擊輪播器區域時
var isClickEvent = false;
carousel.on("click", function(){
    isClickEvent = true;
    // 停止自動播放
    carousel.carousel("pause");
    // 恢復狀態以便於滑鼠離開後重新啟用自動播放
    setTimeout(function(){
        isClickEvent = false;
    }, 1000); // 停止自動播放後 1 秒恢復為 false
});
// 滑鼠離開輪播器時重新啟用自動播放
carousel.on("slid.bs.carousel", function(){
    if (!isMouseOver) {
        carousel.carousel("cycle");
    }
});
});