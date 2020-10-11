

  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel'),
        onCycleTo = function () {
            var activeIndicator = this.$indicators.find('.indicator-item.active');
            i = activeIndicator.index();

            document.getElementById("carouselIndex").innerHTML = i;

        },
        instances = M.Carousel.init(elems, { indicators: true, onCycleTo: onCycleTo });
});

  // Or with jQuery
/*
  $(document).ready(function(){
    $('.carousel').carousel();
  });*/