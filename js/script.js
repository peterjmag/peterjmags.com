$('.swipe').each(function() {
    var galleryInner = $(this).children('.gallery-inner')[0];
    var galleryControls = $(galleryInner).next('.gallery-controls');
    var itemCount = $(galleryInner).find('li').length;
    for (var i = itemCount - 1; i >= 0; i--) {
        $(galleryControls).append('<span>&bull;</span>');
    }
    var bullets = $(galleryControls).children('span');
    $(bullets[0]).addClass('on');

    var slider = new Swipe(galleryInner, {
        callback: function(e, pos) {
            var i = bullets.length;
            while (i--) {
                bullets[i].className = ' ';
            }
            bullets[pos].className = 'on';
        }
    });

    galleryControls.find('.left').click(function() {
        slider.prev();
        return false;
    });

    galleryControls.find('.right').click(function() {
        slider.next();
        return false;
    });
});
