$(document).ready(function () {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        // 隐藏常规导航菜单
        $('header nav ul').hide();
        // 创建下拉菜单触发元素并放在右侧
        var dropdownTrigger = $('<div class="dropdown-trigger"><i class="fas fa-bars"></i></div>');
        dropdownTrigger.appendTo('header');
        dropdownTrigger.css('position', 'absolute');
        dropdownTrigger.css('right', '20px');
        dropdownTrigger.css('top', '50%');
        dropdownTrigger.css('transform', 'translateY(-50%)');
        dropdownTrigger.click(function () {
            if ($('header nav ul').is(':hidden')) {
                // 显示下拉菜单并添加动画
                $('header nav ul').slideDown('slow');
                $('header').addClass('menu-open');
            } else {
                // 隐藏下拉菜单并添加动画
                $('header nav ul').slideUp('slow');
                $('header').removeClass('menu-open');
            }
        });
        // 为下拉菜单中的每个链接添加点击事件，以在点击后隐藏菜单
        $('header nav ul li a').click(function () {
            $('header nav ul').slideUp('slow');
            $('header').removeClass('menu-open');
        });
    }
});
