$(function() {
    $('.swipe').each(function() {
        var galleryInner = $(this).children('.gallery-inner')[0];
        var galleryControls = $(galleryInner).next('.gallery-controls');
        var slider = new Swipe(galleryInner);

        galleryControls.find('.prev').click(function() {
            slider.prev();
            return false;
        });

        galleryControls.find('.next').click(function() {
            slider.next();
            return false;
        });

        if (this.id == 'gallery-01') {
            window.setTimeout(function() {
                slider.next();
            }, 1000);
            window.setTimeout(function() {
                slider.prev();
            }, 1600);
        }
    });
});
