// JavaScript Document

    // Run as soon as page loads...
    $(document).ready(function(){
	  	setHeaderFooter();
		setFooterHeight();
		setTitleSize();	
		prewwNav();			
		highlightNav();
		setFAQ();
    });


	/*
		insert before the main-div on each page
	*/
	function setHeaderFooter(){
	$('#main-div').before('\
			<div id="head">\
				<div id="banner">\
					<div id="title"><h3><br /></h3>Alternative Student Breaks<br /><h1>at Northwestern University</h1></div>\
					<img src="../images/colorlogo.png" height="120px" style="float: right;"/>\
				</div>\
				<div class="navbar">\
					<div class="navbar-inner">\
						<div class="container">\
							<ul class="nav">\
								<li class="active"><a href="../index.html">Home</a></li>\
								<li class="active"><a href="../sites.html">Sites</a></li>\
								<li class="active"><a href="../classes.html">Classes</a></li>\
								<li class="active"><a href="../exec.html">Exec Board</a></li>\
								<li class="active"><a href="../faq.html">FAQ</a></li>\
							</ul>\
							<ul class="nav pull-right">\
								<li class="active"><a href="index.html">Pre-WWW</a></li>\
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
		
	function highlightNav(){
		$('.active a').hover(
			function(){
				$(this).css('background-color','#777');
			}, function(){
				$(this).css('background-color', '#222');
		});
	}
	
	function setFooterHeight(){
		var footHeight = -($('#foot').height() + 1);
		$('#foot').css('margin-top', footHeight);
	}
	
	/*
		Sets the correct title size for cross-browser compatibility
	*/
	function setTitleSize(){
		if($.browser.mozilla){
			$('#title').css('font-size',64);
		}
	}

	function startCarousel(){
		$('.slideshow').cycle({
			fx: 'fade'
		})
	}

	function prewwNav(){
		$(".buf-top .span9").first().before('\
		<div class="span2" style="margin: 0 30px 0 0">\
			<ul class="nav nav-tabs nav-stacked">\
				<li><a href="index.html">Pre-WWW Overview</a></li>\
				<li><a href="trip.html">Trip Info</a></li>\
				<li><a href="leaders.html">Site Leaders</a></li>\
				<li><a href="faq.html">FAQ</a></li>\
				<li><a href="contact.html">Contact Us</a></li>\
				<li><a href="apply.html">Apply!</a></li>\
			</ul>\
			<iframe src="http://www.formspring.me/widget/view/ASBNorthwestern?&size=medium&bgcolor=%23EDFAEF&fgcolor=%23222222" \
			frameborder="0" scrolling="no" width="180" height="245" style="border:none;"><a href="http://www.formspring.me/ASBNorthwestern">\
			http://www.formspring.me/ASBNorthwestern</a></iframe>\
			<a href="http://www.formspring.me/ASBNorthwestern">Click me to see previously answered questions!</a>\
		</div>');
	}
	
	
	//set favicon
	
	$('head').prepend('\
		<link rel="shortcut icon" href="../images/asblogo.png" type="image/x-icon" />\
		<link rel="icon" href="../images/asblogo.png" type="image/x-icon" />');
		
	// add animation to the Pre-WWW FAQ page
		function setFAQ(){
	$('.question').prepend('<img src="../images/icons/right_arrow_bullet.png" width="16px" class="right-arrow-bullet"/>');
	
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