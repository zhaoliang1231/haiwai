$(function(){
	$('a').click(function(){
		$(this).css('color','#01DFFD');
		$(this).parent().siblings().find('a').css('color','#000000');
	});
	
	$('.tty').find('.ab12').eq(0).css({
		'background':'red',
		'color':'#ffffff'
	});
	$('.ab12').hover(function(){
		$(this).css({
			'background':'red',
			'color':'#ffffff'
		});
	$(this).parent().siblings().children('.ab12').css({
		'background':'#ffffff',
		'color':'red'
	});
});
$('.ab14').hover(function(){
	$('.bei2').css('display','block');
	$('.bei1').css('display','none');
});
$('.ab15').hover(function(){
	$('.bei1').css('display','block');
	$('.bei2').css('display','none');
});
});
$(function () {
  $('.shutter').shutter({
	shutterW: 400, // 容器宽度
	shutterH: 300, // 容器高度
	isAutoPlay: true, // 是否自动播放
	playInterval: 3000, // 自动播放时间
	curDisplay: 4, // 当前显示页
	fullPage: false // 是否全屏展示
  });
});
  $(function(){
      	var navOffset=$(".wekong1").offset().top;
      	var navOffset1=$(".tw").offset().top;
      	var navOffset2=$(".ab9").offset().top;
      	$(window).scroll(function(){
      		var scrollPos=$(window).scrollTop();
      		var scrollPos1=$(window).scrollTop();
      		var scrollPos2=$(window).scrollTop();
      		if(scrollPos>navOffset){
      			$(".wekong1").addClass("fixed");
      			$('.ttt1').css('display','none');
      			$(".wekong1").find('a').eq(0).css('color','#01DFFD');
      			$(".wekong1").find('a').eq(1).css('color','#000000');
      			$(".wekong1").find('a').eq(2).css('color','#000000');
      		}else{
      			$(".wekong1").removeClass("fixed");
      			$('.ttt1').css('display','block');
      		}
      		if(scrollPos1>navOffset1 && scrollPos2<navOffset2){
      			$(".wekong1").find('a').eq(1).css('color','#01DFFD');
      			$(".wekong1").find('a').eq(0).css('color','#000000');
      			$(".wekong1").find('a').eq(2).css('color','#000000');
      		}
      		if(scrollPos2>navOffset2){
      			$(".wekong1").find('a').eq(2).css('color','#01DFFD');
      			$(".wekong1").find('a').eq(1).css('color','#000000');
      			$(".wekong1").find('a').eq(0).css('color','#000000');
      		}
      	})
      	
      	
      	
      	
	
	$('.top1').children('li').eq(6).css('border-bottom', '2px solid #2AABD2');
	$('.top1').children('li').eq(6).find('a').css('color', '#2AABD2');
	$(".top1 li").click(function() {
		$(this).css('border-bottom', '2px solid #2AABD2');
		$(this).children('.text-muted').css('color', '#2AABD2');
		$(this).siblings().css('border-bottom', '');
		$(this).siblings().children('.text-muted').css('color', '');
	});
	var q = 0;
	$(".yi img").click(function() {
		q++;
		if(q % 2 != 0) {
			$(".t1").css("display", "block");
		} else {
			$(".t1").css("display", "none");
		}
	});
      });