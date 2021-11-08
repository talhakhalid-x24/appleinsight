$(window).on('resize', function() {
    var win = $(this);
    if (win.width() < 975) {
      $(".logo").hide();
    }
    else{
      $(".logo").show();
    }
});

const open_btn = document.getElementById('open-btn');
const close_btn = document.getElementById('close-btn');
const nav = document.querySelectorAll('.nav');

open_btn.addEventListener('click',() => {
    nav.forEach(nav_el => nav_el.classList.add('visible'));
})


close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})
