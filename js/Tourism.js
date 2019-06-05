$(function(){
	$('.top1').children('li').eq(5).css('border-bottom', '2px solid #2AABD2');
	$('.top1').children('li').eq(5).find('a').css('color', '#2AABD2');
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
	
	var c=0;
	var b=0;
	$('.ka1').children().eq(0).find('.bian').css('background',' #42C5D7');
	$('.da').children('.xiao').eq(0).css('display','block');
	$('.you1').click(function(){
		$(this).children('.bian').css('background',' #42C5D7');
		c=$(this).index();
		$(this).siblings().find('.bian').css('background','');
		$('.ka2').children().eq(c).find('.bian').css('background',' #42C5D7');
		if (c==1) {
			$('.da').children('.xiao').eq(1).css('display','block');
			$('.da').children('.xiao').eq(0).css('display','none');
			$('.da').children('.xiao').eq(2).css('display','none');
			$('.da').children('.xiao').eq(3).css('display','none');
			$('.da').children('.xiao').eq(4).css('display','none');
			$('.da').children('.xiao').eq(5).css('display','none');
		}
		if (c==0) {
			$('.da').children('.xiao').eq(0).css('display','block');
			$('.da').children('.xiao').eq(1).css('display','none');
			$('.da').children('.xiao').eq(2).css('display','none');
			$('.da').children('.xiao').eq(3).css('display','none');
			$('.da').children('.xiao').eq(4).css('display','none');
			$('.da').children('.xiao').eq(5).css('display','none');
		}
		if (c==2) {
			$('.da').children('.xiao').eq(2).css('display','block');
			$('.da').children('.xiao').eq(0).css('display','none');
			$('.da').children('.xiao').eq(1).css('display','none');
			$('.da').children('.xiao').eq(3).css('display','none');
			$('.da').children('.xiao').eq(4).css('display','none');
			$('.da').children('.xiao').eq(5).css('display','none');
		}
		if (c==3) {
			$('.da').children('.xiao').eq(3).css('display','block');
			$('.da').children('.xiao').eq(0).css('display','none');
			$('.da').children('.xiao').eq(2).css('display','none');
			$('.da').children('.xiao').eq(1).css('display','none');
			$('.da').children('.xiao').eq(4).css('display','none');
			$('.da').children('.xiao').eq(5).css('display','none');
		}
		if (c==4) {
			$('.da').children('.xiao').eq(4).css('display','block');
			$('.da').children('.xiao').eq(0).css('display','none');
			$('.da').children('.xiao').eq(2).css('display','none');
			$('.da').children('.xiao').eq(3).css('display','none');
			$('.da').children('.xiao').eq(1).css('display','none');
			$('.da').children('.xiao').eq(5).css('display','none');
		}
		if (c==5) {
			$('.da').children('.xiao').eq(5).css('display','block');
			$('.da').children('.xiao').eq(0).css('display','none');
			$('.da').children('.xiao').eq(2).css('display','none');
			$('.da').children('.xiao').eq(3).css('display','none');
			$('.da').children('.xiao').eq(4).css('display','none');
			$('.da').children('.xiao').eq(1).css('display','none');
		}
	$('.you2').click(function(){
		b++;
		$(this).children('.bian').css('background',' #42C5D7');
		$(this).siblings().find('.bian').css('background','');
	});
	});
	if (b>0) {
		$('.ka2').children().eq(0).find('.bian').css('background',' #42C5D7');
	}
	$('.you2').click(function(){
		$(this).children('.bian').css('background',' #42C5D7');
		$(this).siblings().find('.bian').css('background','');
	});
	
});