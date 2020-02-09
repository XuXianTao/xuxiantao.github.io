const rect1_normal = {
  'width': '150%',
  'height': '150%',
  'transform': 'translate(-50%, -50%) rotate(0deg) scale(1)',
  'border-width': '5px'
}
const rect2_normal = {
  'width': '80%',
  'height': '80%',
  'transform': 'translate(-50%, -50%) rotate(0deg)',
  'border-width': '4px'
};



document.onmousemove = function(e) {
  e = e || event
  var cursor = $('#animate_mouse_cursor');
  cursor.css({
    'top': e.clientY - cursor.height() / 2,
    'left': e.clientX - cursor.width() / 2
  })
}
document.onmousedown = function(e) {
  var rect1 = $('.animate_mouse_rect-1');
  var rect2 = $('.animate_mouse_rect-2');
  rect1.css({
    'width': 0,
    'height': 0,
    'transform': 'translate(-50%, -50%) rotate(180deg)'
  });
  rect2.css({
    'width': '250%',
    'height': '250%',
    'transform': 'translate(-50%, -50%) rotate(0deg)'
  })
}
document.onmouseup = function(e) {
  var rect1 = $('.animate_mouse_rect-1');
  var rect2 = $('.animate_mouse_rect-2');
  rect1.css(rect1_normal);
  rect2.css(rect2_normal);
}

function animate_mouse() {
  var rect1 = $('.animate_mouse_rect-1');
  var rect2 = $('.animate_mouse_rect-2');
  $('a').mouseenter(function(e) {
    rect1.css({
      'transform': 'translate(-50%, -50%) rotate(135deg) scale(0.7)',
      'border-width': '8px'
    })
    rect2.css({
      'width': '250%',
      'height': '250%',
      'transform': 'translate(-50%, -50%) rotate(-270deg)',
      'border-width': '10px'
    })
  })
  $('a').mouseout(function(e) {
    rect1.css(rect1_normal)
    rect2.css(rect2_normal);
  })
};
animate_mouse();

function animate_card() {
  var card = $('.article-card');
  var wrappers = $('.article-head__wrapper');
  var wrapper_normal = {
    'visibility': 'hidden',
    'opacity': '0',
    'width': '0'
  };
  wrappers.height(wrappers.next('a').height());

  card.on('mouseenter mousemove', function(e) {
    var wrapper = $(this).find('.article-head__wrapper');
    wrapper.css({
      'visibility': 'visible',
      'opacity': '.7',
      'width': (wrapper.next('a').width() + 40)
    })
  })
  card.mouseout(function(e) {
    $(this).find('.article-head__wrapper').css(wrapper_normal);
  })
}
animate_card();
var sidebar_a = document.getElementById('sidebar-arrows')
sidebar_a.onclick = function(event) {
  var sidebar = document.getElementById('archives')
  if (!sidebar.classList.contains('sidebar-shown')) {
    sidebar.classList.add('sidebar-shown')
  }
  else {
    sidebar.classList.remove('sidebar-shown')
  }
  event.preventDefault()
  window.event.returnValue = false;
  return false
}