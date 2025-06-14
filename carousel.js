$(document).ready(function(){
    var carousel = $("#carouselExampleControls");
    var isMouseOver = false;
    var isClickEvent = false;

    // 啟用輪播器
    carousel.carousel({
        interval: 3000, // 自動播放間隔時間（毫秒）
        pause: false,   // 關閉 Bootstrap 預設的 hover 暫停，改用自訂
        wrap: true     // 禁用循環播放
    });

    // 滑鼠懸停在輪播器上時
    carousel.on("mouseenter", function(){
        isMouseOver = true;
        carousel.carousel("pause");
    });

    // 滑鼠離開輪播器時
    carousel.on("mouseleave", function(){
        isMouseOver = false;
        if (!isClickEvent) {
            carousel.carousel("cycle");
        }
    });

    // 點擊輪播器區域時
    carousel.on("click", function(){
        isClickEvent = true;
        carousel.carousel("pause");
        setTimeout(function(){
            isClickEvent = false;
        }, 1000); // 停止自動播放後 1 秒恢復為 false
    });

    // 每次滑動後，如果滑鼠沒在上面，恢復自動播放
    carousel.on("slid.bs.carousel", function(){
        if (!isMouseOver && !isClickEvent) {
            carousel.carousel("cycle");
        }
    });
});