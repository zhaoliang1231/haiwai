$(function() {
	var firstChild = $(".top1>:first"); //用选择器的方式获取第一个子元素
	firstChild.css('border-bottom', '2px solid #2AABD2'); //将第一个子元素中的文字变为红色，可以看到只有“111”是红色的
	var firstChild = $(".top1>:first a"); //用选择器的方式获取第一个子元素
	firstChild.css('color', '#2AABD2');

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


	$(".test").eq(1).find("button").show();
	$(".test").mouseover(function() {
		$(".test").find("button").hide();
		$(this).find("button").show();
	});
	$('.f5').eq(0).find('.f7').show();
	$('.f5').click(function() {
		$('.f5').find('.f7').hide();
		$(this).find('.f7').show();
		var b = $(this).index();
		$(".f1").hide().eq(b).show();
	});
	$('.r7').css('display', 'block');
	$('.r1').eq(0).children('.r2').css('color', '#FFFFFF');
	$('.r1').eq(0).children('.r2').css('background', 'red');
	$('.r2').mouseover(function() {
		$(this).css('color', '#FFFFFF');
		$(this).css('background', 'red');
		$(this).parent().siblings().children('.r2').css('color', 'red');
		$(this).parent().siblings().children('.r2').css('background', '');
		var a = $(this).parent().index();
		if(a == 0) {
			$('.r7').css('display', 'block');
			$('.r8').css('display', 'none');
		}
		if(a == 1) {
			$('.r8').css('display', 'block');
			$('.r7').css('display', 'none');
		}
	});

	$('#dowebok').fullpage({
		//可以为每个section设置background-color属性
		//是否显示导航,默认为false.如果设置为true,会显示小圆点,作为导航
		navigation:true,
		//导航小圆点的位置,可以设置为left或者right
		navigationPosition:'right',
		scrollingSpeed:300,
		//导航
		resize:true,
		//滚动到某一屏回调函数
		afterLoad:function(anchorLink,index){
			switch(index){
				//第二屏产品服务
				case 2:
					setInterval(function(){
						$('.t3').eq(0).css(
							{
								'animation':'up 0.3s',
								'display':'block'
							}
						);
						$('.t3').eq(1).css(
							{
								'animation':'up 0.5s',
								'display':'block'
							}
						);
						$('.t3').eq(2).css(
							{
								'animation':'up 0.7s',
								'display':'block'
							}
						);
						$('.t3').eq(3).css(
							{
								'animation':'up 0.9s',
								'display':'block'
							}
						);
					},300);
					break;
			case 3:
					$('.t4').css(
							{
								'animation':'right 0.5s',
								'display':'block'
							}
					);
				break;
			case 4:
					$('.diu').css(
							{
								'animation':'up 0.5s',
								'display':'block'
							}
					);
				break;
			case 5:
					$('.d3').css(
							{
								'animation':'up 0.5s',
								'display':'block'
							}
					);
					$('.d4').css(
							{
								'animation':'up 0.7s',
								'display':'block'
							}
					);
					$('.d33').css(
							{
								'animation':'up 0.9s',
								'display':'block'
							}
					);
				break;
				case 6:
					$('.lo').eq(0).css(
							{
								'animation':'up 0.5s',
								'display':'block'
							}
					);
					$('.lo').eq(1).css(
							{
								'animation':'up 0.7s',
								'display':'block'
							}
					);
					$('.lo').eq(2).css(
							{
								'animation':'up 0.9s',
								'display':'block'
							}
					);
					$('.liu3').css({
						'opacity':'1',
						'transition': '5s'
					});
					$('.oul').eq(0).css(
							{
								'animation':'right 0.5s',
								'display':'block'
							}
					);
					$('.oul').eq(1).css(
							{
								'animation':'up 0.7s',
								'display':'block'
							}
					);
					$('.oul').eq(2).css(
							{
								'animation':'right 0.9s',
								'display':'block'
							}
					);
				break;
				case 7:
					$('.q1').css(
							{
								'opacity':'1',
								'transition': '3s'
							}
					);
				break;
				case 8:
					$('.r4').css(
							{
								'animation':'up 0.7s',
								'display':'block'
							}
					);
				break;
			}
		}
	});
//	//第三个页面
//	$('.section3').hover(function() {
//		$('.t4').css('margin-left', '0px');
//		$('.t4').css('transition', ' 0.2s');
//	});
//	//第二个页面
//	
//	$('.section2').hover(function() {
//		$('.t3').eq(0).css({
//			'margin-top':'0',
//			'transition':' 0.2s'
//		});
//		$('.t3').eq(1).css({
//			'transition':' 0.4s',
//			'margin-top':'0'
//		});
//		$('.t3').eq(2).css({
//			'transition':' 0.6s',
//			'margin-top':'0'
//		});
//		$('.t3').eq(3).css({
//			'transition':' 0.8s',
//			'margin-top':'0'
//		});
//	});
//	
	$('.t3').hover(function() {
		$(this).find('.a31').css({
			'width':'130%',
			'height':'130%',
			'margin-left':'-15%',
			'margin-top':'-15%',
			'transition':' 0.7s',
			'opacity':'0'
		});
	}, function() {
		$(this).find('.a31').css({
			'width':'',
			'height':'',
			'margin-left':'',
			'margin-top':'',
			'transition':'',
			'opacity':''
		});
	});
//

 var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


});