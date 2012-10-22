var toggleButton = function(button, pos) {
    if (pos > 0) {
        button.css('opacity', '0.5');
        button.css('filter', 'alpha(opacity=50)');
    } else {
        button.css('opacity', '0');
        button.css('filter', 'alpha(opacity=0)');
    }
};

$(function() {
    $(".navbar select").change(function() {
      window.location = $(this).find("option:selected").val();
    });

    $(".alert").alert();
    $('.browser-compatibility').bind('closed', function () {
      $(this).parent('.alert-container').addClass('empty');
    });

    $('.swipe').each(function() {
        var galleryInner = $(this).children('.gallery-inner')[0];
        var galleryControls = $(galleryInner).next('.gallery-controls');
        var slider = new Swipe(galleryInner);

        var prevButton = galleryControls.children('.prev');
        var nextButton = galleryControls.children('.next');

        prevButton.click(function() {
            slider.prev();
            toggleButton(prevButton, slider.getPos());
            return false;
        });

        nextButton.click(function() {
            slider.next();
            toggleButton(prevButton, slider.getPos());
            return false;
        });

        if (this.id == 'gallery-01') {
            window.setTimeout(function() {
                slider.next();
            }, 500);
            window.setTimeout(function() {
                slider.prev();
            }, 1100);
        }
    });
});
