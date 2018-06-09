(function (window, j) {
    if (!j) {
        window.console.error("Jquery is required!");
    }

    // ON DOCUMENT READY
    j(window.document).ready(function () {
        j(window.document.body).addClass('ready');
    });

    // ON DOCUMENT LOAD
    j(window).on('load', function (e) {
       j(window.document.body).addClass('loaded');
    });

    j('.owl-carousel').owlCarousel({
        margin: 10,
        loop: false,
        items: 1
    })
}(this, this.$ || this.jQuery || false));