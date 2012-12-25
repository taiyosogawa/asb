<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<!--Style Sheets-->
<link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="css/asb.css" />
<title>ASB Sites</title>
<script type="text/javascript" src="scripts/analytics.js"></script>
</head>

<body>
<div id="wrapper">
   <div id="main-div">
      <div class="buffer">
         <h1>Sites</h1>
         <h4 id="trip">Pre-WWW 2012</h4>
         <div id="map-canvas" style="float: left;">
         	<!--Raphael graphics go here-->
         </div>
         <div id="site-info-container">
         </div>
         </div>
   </div>
</div>

<!--Javascript--> 
<!--<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" ></script>-->
<script type="text/javascript" src="scripts/jquery-1.7.2.min.js"></script> 
<script type="text/javascript" src="scripts/bootstrap.min.js"></script> 
<script type="text/javascript" src="scripts/asb.js"></script>
<script type="text/javascript" src="scripts/map/raphael-min.js"></script>
<script type="text/javascript" src="scripts/map/map-coordinates.js"></script>
<script type="text/javascript">

window.onload = function () {
    var paper = Raphael("map-canvas", 940, 560);

    //Draw Map
    for (var state in usMap) {
        paper.path(usMap[state]).attr({
	    	"fill": "#33cccc",
			"opacity": ".8",
	    	"stroke": "#fff",
	    	"stroke-opacity": "1",
	    	"stroke-linejoin": "round",
	    	"stroke-miterlimit": "4",
	    	"stroke-width": "0.75",
	    	"stroke-dasharray": "none"
	    });      
    }
	 
	// Draw the Map!
	drawMap();

	function drawMap () {
		var siteClasses = {};		// We will store all the CSS classes here

		// Grab the trip name from the label
		tripName = $('#trip').text().replace(/[^0-9A-Za-z]/g,'-')
		trip = records[tripName];
		
		for (var city in trip) {
			var cityX = cities[city]['x'];
			var cityY = cities[city]['y'];
			
			var cityName = tripName + '_' + city.replace(/[^0-9A-Za-z]/g,'-');
			siteClasses[city] = cityName;		

			var cityMarker = paper.circle(cityX, cityY, 5).attr({
				"stroke-width": "1",
				"fill": "#a00"
			});

			cityMarker.click(function () {
				$('.info-' + this.id).toggle();
			});
			
			// Create labels and divs for each site
			for (var site in trip[city]) {
				var Site = trip[city][site];
				var siteId = Site.replace(/ /g,'') + '-' + cityMarker.id;
				siteId = siteId.replace(/[^0-9A-Za-z]/g,'-');
				
				$('#site-info-container').append('<div id="' + siteId + '" class="site-info info-' + cityMarker.id +'">'
						+ Site +
					'</div>');
				
				paper.text(cityX + 10, cityY - 20, trip[city][site]).attr({
					'text-anchor': 'start'
				});
				cityY += 12;
			}
		}
		
		
		paper.circle(cities['evanston']['x'], cities['evanston']['y'], 8).attr({
				"stroke-width": "2",
				"fill": "#a0a"
		});

	}
	
	
  }

</script>
</body>
</html>
