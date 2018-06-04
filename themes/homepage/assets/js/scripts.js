(function (window, j) {
    if (!j) {
        window.console.error("Jquery is required!");
    }

    j('.owl-carousel').owlCarousel({
        margin: 10,
        loop: false,
        items: 1
    })
}(this, this.$ || this.jQuery || false));