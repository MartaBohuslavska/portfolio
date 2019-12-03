$(document).ready(function(){

  $('a[data-target^="anchor"]').on('click.smoothscroll', function(){
    let target = $(this).attr("href"),
        bl_top = $(target).offset().top - 92;
    $('body, html').animate({scrollTop: bl_top}, 500);
  });
 
  $(window).scroll(function(){
    if($(this).scrollTop() > 700) {
      $('header').addClass('color');
    } else {
      $('header').removeClass('color');
    }
  });

  $('.slider-bouncy').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false
  });

  $('.see-more').click(function() {
    $(this).parents('.project').find('.slider-bouncy').fadeIn();
		return false;
  });	
  
  $(document).mouseup(function (e){ 
		var div = $(".slider-bouncy"); 
		if (!div.is(e.target) // якщо клацнути не по відкритому блоку
		    && div.has(e.target).length === 0) { // і не по його дочірніх елементах
			div.hide(); 
		}
  });
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) { // закриття на Esc
			e.stopPropagation();
			$('.slider-bouncy').fadeOut();
		}
  });

  if($(window).width() < 768) {
    $('#dropdown-btn').addClass('open');
    $('.navbar').hide();
  };

  $(window).resize(function(){
    if($(this).width() < 768) {
      $('#dropdown-btn').addClass('open');
      $('.navbar').hide();
    } else {
      $('#dropdown-btn').removeClass('open');
      $('.navbar').show();
    }
  });

  $('#dropdown-icon').on('click', function(){
    $(this).parents('#dropdown-btn').find('.dropdown-menu').toggle();
    $(this).parents('#dropdown-btn').css({'position': 'fixed', 
    'top': '20px', 
    'right': '20px', 
    'text-align': 'right', 
    'background-color': '#1F6B75', 
    'padding': '10px'});
    $(this).hide();
    $(this).next().toggle();
  });

  $('#dropdown-icon-close').on('click', function(){
    $(this).parents('#dropdown-btn').find('.dropdown-menu').toggle();
    $(this).hide();
    $(this).prev().toggle();
  });
});