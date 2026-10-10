$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		var balloonsLinedUp = false;
		var balloonIds = ['b11', 'b22', 'b33', 'b44', 'b55', 'b66', 'b77'];
		function arrangeLetterBalloons(animate) {
			var $balloons = $(balloonIds.map(function(id) { return '#' + id; }).join(','));
			if (!$balloons.length) return;
			var viewportWidth = $(window).width();
			var balloonWidth = Math.min(100, (viewportWidth - 24) / 7);
			var gap = Math.min(10, Math.max(0, (viewportWidth - balloonWidth * 7) / 8));
			var totalWidth = balloonWidth * 7 + gap * 6;
			var left = Math.max(0, (viewportWidth - totalWidth) / 2);
			var top = Math.max(16, Math.min(240, $(window).height() * 0.3));
			$balloons.each(function(index) {
				$(this).css({width: balloonWidth, height: balloonWidth * 1.83, backgroundSize: balloonWidth + 'px ' + (balloonWidth * 1.83) + 'px', bottom: 'auto', zIndex: 100});
				$(this).find('h2').css({fontSize: Math.max(18, balloonWidth * 0.5), margin: '12px 0 10px'});
				var position = {left: left + index * (balloonWidth + gap), top: top};
				if (animate) $(this).stop(true).animate(position, 500);
				else $(this).stop(true).css(position);
			});
		}
		$(window).resize(function(){
			if (balloonsLinedUp) arrangeLetterBalloons(false);
		});
		$(window).on('orientationchange', function(){
			if (balloonsLinedUp) setTimeout(function(){ arrangeLetterBalloons(false); }, 100);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function randomBalloonLeft($balloon) {
		var sidePadding = 12;
		var width = $balloon.outerWidth();
		var rotatedExtra = Math.max(0, ($balloon[0].getBoundingClientRect().width - width) / 2);
		var minLeft = sidePadding + rotatedExtra;
		var maxLeft = Math.max(minLeft, $(window).width() - width - rotatedExtra - sidePadding);
		return minLeft + (maxLeft - minLeft) * Math.random();
	}
	function loopOne() {
		var $balloon = $('#b1');
		var randleft = randomBalloonLeft($balloon);
		var randtop = 500*Math.random();
		$balloon.animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var $balloon = $('#b2');
		var randleft = randomBalloonLeft($balloon);
		var randtop = 500*Math.random();
		$balloon.animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var $balloon = $('#b3');
		var randleft = randomBalloonLeft($balloon);
		var randtop = 500*Math.random();
		$balloon.animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var $balloon = $('#b4');
		var randleft = randomBalloonLeft($balloon);
		var randtop = 500*Math.random();
		$balloon.animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var $balloon = $('#b5');
		var randleft = randomBalloonLeft($balloon);
		var randtop = 500*Math.random();
		$balloon.animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var $balloon = $('#b6');
		var randleft = randomBalloonLeft($balloon);
		var randtop = 500*Math.random();
		$balloon.animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var $balloon = $('#b7');
		var randleft = randomBalloonLeft($balloon);
		var randtop = 500*Math.random();
		$balloon.animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		balloonsLinedUp = true;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('.balloons').removeClass('balloons-rotate-behaviour-one balloons-rotate-behaviour-two');
		arrangeLetterBalloons(true);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');
