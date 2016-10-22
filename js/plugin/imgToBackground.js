$(document).ready(function () {
    $(".slide").each(function () {
        var img = $(this).find("> img");
        if (img.length > 0) {
            var imgSrc = img.attr("src");
            img.parent().css({
                'background-image': 'url(' + imgSrc + ')'
            });
            img.remove();
        }
    });
});