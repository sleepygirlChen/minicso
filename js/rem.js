(function ($) {

  remResize();

  var timers = [];

  $(window).resize(function () {

    // 页面防抖
    var timer = setTimeout(function () {

      for (var i = 1; i < timers.length; i++) {
        clearTimeout(timers[i]);
      }

      var style = document.getElementById('styleRem');

      if (style) style.remove();

      remResize();
      timers = [];

    }, 300);

    timers.push(timer);

  });


})(jQuery)



function remResize() {

  //手机端最大安全尺寸 640px
  //以iphone5屏为标准 320px 设置100px
  var stadWidth = 320;

  //获取屏幕的宽度
  var screenWidth = $(window).width();
  
  var fontSize = screenWidth / stadWidth * 100;

  // var id = 'rem' + new Date().getTime(); // 随机值

  var style = $('<style id="styleRem">html{font-size: ' + fontSize + 'px;}</style>');

  $('head').append(style);

  // $('html').css({fontSize: fontSize});

}