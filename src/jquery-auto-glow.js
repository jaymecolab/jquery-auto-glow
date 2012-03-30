(function($) {
  var currentRadius, multiplier;

  function parseOptions(options) {
    return {
      RADIUS:     (options.radius    || 20),
      DURATION:   (options.duration  || 900),
      TEXT_COLOR: (options.textColor || '#fff'),
      HALO_COLOR: (options.haloColor || '#777'),
      AUTO:       (options.auto      || 'on')
    }
  }

  function currentRadius(elem) {
    if (prop = elem.style['text-shadow']) {
      return parseInt(prop.match(/0 0 (\d+)px/));
    } else {
      return 0;
    }
  }

  function stepTextShadow(fx) {
    if (fx.state == 0) {
      fx.start = currentRadius(fx.elem);
    }

    updatedRadius = fx.end.begin ?
      parseInt(fx.end.radius * fx.pos) :
      parseInt(fx.end.radius - (fx.end.radius * fx.pos))

    if (fx.end.begin || (fx.state < 1)) {
      $(fx.elem).css('text-shadow', fx.end.color + ' 0 0 ' + updatedRadius + 'px');
    } else {
      $(fx.elem).css('text-shadow', $(fx.elem).data('glow.originalGlow'));
    }
  }

  function addGlow(opts) {
    var opts = parseOptions(opts || { });

    function startGlow(obj, number) {
      $(obj).stop().animate({
        color: opts.TEXT_COLOR,
        textShadow: {
          //begin: true,
          color: opts.HALO_COLOR,
          radius: opts.RADIUS
        }
      }, opts.DURATION);
      setTimeout(function(){ startFade(obj); }, opts.DURATION);
    }

    function startFade(obj) {
      $(obj).stop().animate({
        color: '#999999', //$(obj).data('glow.originColor'),
        textShadow: {
          //begin: false,
          color: opts.HALO_COLOR,
          radius: 0
        }
      }, opts.DURATION*0.5);
    }

    with($(this)) {

      //random num gen
      var numRand = Math.floor((Math.random()*1000)+800); 
      var bigNumRand = Math.floor((Math.random()*3000)+1000);
      $(this).each( function(){
        var number = numRand;
        var bigNumber = bigNumRand;
        var obj = $(this);
        var t=setTimeout( function(){ startGlow(obj,number); }, number);
        var i=setInterval( function(){ startGlow(obj,number); }, bigNumber);
        
      });
      
      /*
      bind('mouseenter', startGlow);
      bind('mouseleave', startFade);
      */
      data('glow.originColor', css('color'));
      data('glow.originalGlow', (css('text-shadow') || 'none'));
    }

    return this;
  }

  $.fx.step['textShadow'] = stepTextShadow;
  $.fn.addGlow = addGlow;
})(jQuery);
