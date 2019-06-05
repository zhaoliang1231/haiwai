$(function(){
//	var firstChild = $(".top1>:first"); //用选择器的方式获取第一个子元素
//	firstChild.css('border-bottom', '2px solid #2AABD2'); //将第一个子元素中的文字变为红色，可以看到只有“111”是红色的
//	var firstChild = $(".top1>:first a"); //用选择器的方式获取第一个子元素
//	firstChild.css('color', '#2AABD2');
	$('.top1').children('li').eq(3).css('border-bottom', '2px solid #2AABD2');
	$('.top1').children('li').eq(3).find('a').css('color', '#2AABD2');
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
