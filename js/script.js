$(function() {
    $('.swipe').each(function() {
        var galleryInner = $(this).children('.gallery-inner')[0];
        var galleryControls = $(galleryInner).next('.gallery-controls');
        var slider = new Swipe(galleryInner);

        galleryControls.find('.next').click(function() {
            slider.next();
            return false;
        });
    });
});
