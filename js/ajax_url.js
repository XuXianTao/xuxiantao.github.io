(function ajax_url() {
  var as = document.getElementsByTagName('a')
  for (var i=0;i<as.length;i++) {
    if (as[i].id==='sidebar-arrows') continue
    as[i].onclick = function (event) {
      var url = $(this).attr('href');
      var reg = new RegExp(/^\//);
      var reg_param = new RegExp(/^\/[^#]*/g);
      if (!reg.test(url)) return true;
      $.ajax({
        url: reg_param.exec(url)['0'],
        method: 'get',
        dataType: 'html',
        success: function (data) {
          data = $('<code></code>').append(data).find('#main_body');
          data = $(data).children();
          $('#main_body').html(data);
          //重新渲染绑定事件
          main_script(jQuery);
          ajax_url();
          animate_mouse();
          animate_card();
          //判断是否有#锚点参数，确定回滚到页面顶部还是定位锚点
          var reg = new RegExp(/#([\S\s]+)/g);
          var param = url.match(reg);
          if (param === null) $(window).scrollTop(0);
          else {
            var des = '#tag-' + param[0].replace('#', '');
            $('html,body').animate({
              scrollTop: $(des).offset().top - 75
            }, 400)
            $(des).parent('.tag-list').addClass('tag-hover');
          }
        },
        error: function(XHR, statu, error) {
          console.log('error')
        }
      });
      event.preventDefault();
      window.event.returnValue = false;
      return false;
    };
  }
})();
