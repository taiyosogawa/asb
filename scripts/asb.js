/*
 *		JavaScript for all non pre-www pages
 *		Authored by Taiyo Sogawa
 *		1 July 2012
 *		
*/

    /*
	 	 Run as soon as page loads...
	 */
	 
    $(document).ready(function(){
	  	setHeaderFooter();
		setFooterHeight();
		setTitleSize();			
		highlightNav();
		setFAQ();
		setArrowPosition();
		setFavicon();
		setExecBios();
		startCarousel();
		setTwitter();
    });

	/*
		insert before the main-div on each page
	*/
	function setHeaderFooter(){
	$('#main-div').before('\
			<div id="head">\
				<div id="banner">\
					<div id="title"><h3><br /></h3>Alternative Student Breaks<h1>at Northwestern University</h1></div>\
					<img src="images/colorlogo.png" height="120px" style="float: right;"/>\
				</div>\
				<div class="navbar">\
					<div class="navbar-inner">\
						<div class="container">\
							<ul class="nav">\
								<li class="active"><a href="index.html">Home</a></li>\
								<li class="active"><a href="sites.html">Sites</a></li>\
								<li class="active"><a href="apply.html">Apply</a></li>\
								<li class="active"><a href="exec.html">Exec Board</a></li>\
								<li class="active"><a href="faq.html">FAQ</a></li>\
							</ul>\
							<ul class="nav pull-right">\
								<li class="active" id="prewww-nav"><a href="prewww/index.html">Pre-WWW</a></li>\
							</ul>\
						</div>\
					</div>\
				</div>\
			</div>');
	
	$('#wrapper').after('\
	<div class="modal-footer" id="foot">\
    	<div class="foot-buffer pull-left">\
            Alternative Student Breaks, Northwestern University\
            <br />1999 Campus Drive, Evanston, IL 60208\
        </div>\
		<div class="foot-buffer pull-right">\
			<a href="mailto:asb@u.northwestern.edu" style="color: #FFFFFF;">asb@u.northwestern.edu</a>\
		</div>\
	</div>');
	
	}
	
	/*
		Sets the correct title size for cross-browser compatibility
	*/
	function setTitleSize(){
		if($.browser.mozilla){
			$('#title').css('font-size',64);
		}
	}
	
	/*
		Navigation buttons are hilighted when moused over
	*/	
	function highlightNav(){
		$('.active a').hover(
			function(){
				$(this).css('background-color','#777');
			}, function(){
				$(this).css('background-color','#222');
		});
	}
	
	/*
		Ensures that the footer is correctly bound to the bottom of the browser screen
	*/
	function setFooterHeight(){
		var footHeight = -($('#foot').height() + 1);
		$('#foot').css('margin-top', footHeight);
	}

	/*
		Start the photo carousel
	*/
	function startCarousel(){
		$('.slideshow').cycle({
			fx: 'fade'
		});
	}
	
	/*
		set the position for the arrow
	*/
	function setArrowPosition(){
		var position = $('#prewww-nav').offset();
		$('#prewww-arrow').css({
			'top': position.top + 50,
			'left': position.left
		});
		
	}

	/*					
		set favicon	
	*/			
	function setFavicon(){
		$('head').prepend('\
			<link rel="shortcut icon" href="images/asblogo.png" type="image/x-icon" />\
			<link rel="icon" href="images/asblogo.png" type="image/x-icon" />');
	}
		
		
		
		
		//Handle all the interaction with exec bios

	function setExecBios(){
		$('.hide-bio').hide();
		$('.hide-bio').removeClass('hidden');
		
		$('#exec-bios dd').hover(
			function(){
				$(this).css({
					'color':'#fff',
					'font-weight':'bold',
					'background-color': '#08c'
				});
			}, function(){
				$(this).css({
					'color': '#08c',
					'font-weight':'normal',
					'background-color':'transparent'
				});
		});
		
		$('#exec-bios dd').click(
			function(){
				$('#exec-bios dd').css({
						'color': '#08c',
						'font-weight':'normal'
					});
				$(this).css({
						'color':'#fff',
						'font-weight':'bold',
						'background-color': '#08c'
				});
				$('.hide-bio').hide();
			});
		
		$('.danielle-tag').click(
			function(){
				$('#danielle-bio').show();
		});
		
		$('.fred-tag').click(
			function(){
				$('#fred-bio').show();
		});
		
		$('.matt-tag').click(
			function(){
				$('#matt-bio').show();
		});
		
		$('.lillian-tag').click(
			function(){
				$('#lillian-bio').show();
		});
		
		$('.emily-tag').click(
			function(){
				$('#emily-bio').show();
		});
		
		$('.rebecca-tag').click(
			function(){
				$('#rebecca-bio').show();
		});
		
		$('.marykate-tag').click(
			function(){
				$('#marykate-bio').show();
		});
		
		$('.karen-tag').click(
			function(){
				$('#karen-bio').show();
		});
		
		$('.kate-tag').click(
			function(){
				$('#kate-bio').show();
		});
			
		$('.taiyo-tag').click(
			function(){
				$('#taiyo-bio').show();
		});
		
		$('.jess-tag').click(
			function(){
				$('#jess-bio').show();
		});
		
		$('.chelsea-tag').click(
			function(){
				$('#chelsea-bio').show();
		});
		
		$('.greg-tag').click(
			function(){
				$('#greg-bio').show();
		});
		
		$('.michelle-tag').click(
			function(){
				$('#michelle-bio').show();
		});
		
		$('.dlaney-tag').click(
			function(){
				$('#dlaney-bio').show();
		});
	}
	/*
		Set Twitter API functionality
	*/
	function setTwitter(){
		(function($){
		$.fn.tweets = function(options) {
			$.ajaxSetup({ cache: true });
			var defaults = {
				tweets: 5,
				before: "<li>",
				after: "</li>"
			};
			var options = $.extend(defaults, options);
			return this.each(function() {
				var obj = $(this);
				$.getJSON('http://api.twitter.com/1/statuses/user_timeline.json?callback=?&screen_name='+options.username,
					  function(data) {
							$.each(data, function(i, tweet) {
								 if(tweet.text !== undefined) {
									  $(obj).append(options.before+tweet.text+options.after);
								 }
							});
						}
				);
			});
		};
		})(jQuery);

		$('#tweets').tweets({
				tweets: 1,
				username: ASB_NU,
				before: '<h2>',
				after: '</h2>'
		});
	}
	
	
function setFAQ(){
	$('.question').prepend('<img src="images/icons/right_arrow_bullet.png" width="16px" class="right-arrow-bullet"/>');
	
	$('.question').click(function() {
		$(this).next('.answer').slideToggle().removeClass('hidden');
		
		if($(this).children('.right-arrow-bullet').getRotateAngle() > 45){
			$(this).children('.right-arrow-bullet').rotate({
				duration:500,
				angle: 90, 
				animateTo: 0
			});
		} else {
			$(this).children('.right-arrow-bullet').rotate({
				duration:500,
				angle: 0, 
				animateTo:90
			});
		}	
	});
}

		