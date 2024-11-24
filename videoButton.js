// JavaScript Document
//video button
	
	document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const navbar = document.querySelector('.navbar');
    const videoContainer = document.querySelector('.video-container');

    // 滚动事件监听器
    window.addEventListener('scroll', function() {
        // 当视频部分超过视图的一定比例时，显示按钮
        if (isVideoPartInViewport(videoContainer, 0.5)) {
            scrollToTopBtn.style.display = 'block';
        } else {
            // 否则隐藏按钮
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        const targetPosition = videoContainer.offsetHeight + videoContainer.offsetTop - navbar.offsetHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });

    // 检查元素是否在可视区域内
    function isVideoPartInViewport(el, ratio) {
        var rect = el.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        var topVisible = rect.top >= 0 && rect.top <= windowHeight;
        var bottomVisible = rect.bottom <= windowHeight && rect.bottom >= 0;
        var height = rect.height < windowHeight ? rect.height : windowHeight;
        var verticalVisible = height * ratio <= windowHeight;
        return (topVisible || bottomVisible || verticalVisible);
    }

    window.addEventListener('load', function() {
        var allElements = document.querySelectorAll('*');
        allElements.forEach(function(el) {
            if (el.scrollWidth > window.innerWidth) {
                console.log(el, '超出了窗口宽度');
            }
        });
    });
});






//video
        const video = document.getElementById('fullscreen-video');

        video.addEventListener('click', () => {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) { // Firefox
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) { // IE/Edge
                video.msRequestFullscreen();
            }
        });
		document.getElementById('fullscreen-video').muted = true;
		document.addEventListener("DOMContentLoaded", function() {
    	var video = document.getElementById('fullscreen-video');
    	video.onclick = function(event) {
        event.preventDefault();
    	};
		});
		window.addEventListener('scroll', function() {
		var video = document.getElementById('fullscreen-video');
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		var newTop = scrollTop; // 50 是你希望影片停留的位置
		video.style.top = newTop + 'px';
		});
	  // 使用 JavaScript 监听页面滚动事件
		window.addEventListener('scroll', function() {
		var navbar = document.querySelector('.navbar');
		var content = document.querySelector('.content');
		var scrollPosition = window.scrollY;

		if (scrollPosition > navbar.offsetHeight && navbar.style.position !== 'fixed') {
        // 如果滚动位置超过了导航栏的高度且导航栏当前不是固定定位，则切换为固定定位
        navbar.style.position = 'fixed';
        content.style.paddingTop = navbar.offsetHeight + 'px'; // 调整内容的顶部内边距
    	} 
		else if (scrollPosition <= navbar.offsetHeight && navbar.style.position !== 'relative') {
    	navbar.style.position = 'relative';
    	content.style.paddingTop = '0';
		}
			
		/*else if (scrollPosition <= navbar.offsetHeight && navbar.style.position !== 'relative');*/
        // 否则，如果滚动位置不超过导航栏的高度且导航栏当前不是相对定位，则切换为相对定位
        /*navbar.style.position = 'relative';
        content.style.paddingTop = '0'; // 重置内容的顶部内边距
    	}*/
		});
 