$(function () {
    const $win = $(window);
    const $btnMenu = $('.btn-menu');
    const $nav = $('header > nav');
    const isAnimate = 'is-animate';
    const isOpen = 'is-open';
//ボタンをクリックしたときの記述

$btnMenu.on('click', function () {
  
const $this = $(this);
if ($nav.is(':animated')) {
    return;
}
if (!$this.hasClass(isOpen)) {
    $nav.slideDown();
    $this.addClass(isOpen).addClass(isAnimate);
} else {
    $nav.slideUp();
    $this.removeClass(isOpen).removeClass(isAnimate);
}
});
$nav.on('click', function () {
  
    const $this = $(this);
    if ($nav.is(':animated')) {
        return;
    }
    if ($this.slideDown()) {
        $this.slideUp();
        $btnMenu.removeClass(isOpen).removeClass(isAnimate);
    }
    });
//ウィンドウ幅を変えた時の記述
$win.on('resize', function () {
if ($win.width() > 800) {
    $nav.show();
    $btnMenu.removeClass(isOpen).removeClass(isAnimate);
} else {
    if (!$btnMenu.hasClass(isOpen)) {
    $nav.hide();
    }
}
});

});