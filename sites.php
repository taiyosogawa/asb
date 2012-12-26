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

    // stateOutlines is a set of all the states on the map
    var stateOutlines = {};

    // cityMarkers is a set of all the cities on the map
    var cityMarkers = {};

	// Draw the Map!
	drawMap();

	function drawMap() {
		drawStateOutlines();
		drawLabels();
		drawEvanston();
	}

	function drawStateOutlines() {
	    for (var state in usMap) {
	        stateOutlines[state] = paper.path(usMap[state]).attr({
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
	}

	function drawLabels() {
		// Grab the trip name from the label
		tripName = replaceWithDashes($('#trip').text());
		trip = records[tripName];
		
		for (var city in trip) {
			var cityX = cities[city]['x'];
			var cityY = cities[city]['y'];
			
			var cityName = tripName + '_' + replaceWithDashes(city);

			var cityMarker = paper.circle(cityX, cityY, 5).attr({
				"stroke-width": "1",
				"fill": "#a00",
				"cursor": "pointer"
			});

			cityMarkers[city] = cityMarker;

			// add cityMarker functionality here

			cityMarker.click(function () {
				$('.info-' + this.id).css("font-weight", "bold");
				fadeMap();
			});

			cityMarker.hover(function () {
					this.attr({
						"fill": "#0a0",
						"stroke-width": "1.5"
					});
					$('.info-' + this.id).css("font-weight", "bold");
				}, function () {
					this.attr({
						"fill": "#a00",
						"stroke-width": "1"
	
				});
				$('.info-' + this.id).css("font-weight", "normal");
			});
			
			// Create labels and divs for each site
			$('#site-info-container').append('<br /><dt class="site-info info-' + cityMarker.id +'">' + city + '</dt>');
			for (var site in trip[city]) {
				var Site = trip[city][site];
				var siteId = replaceWithDashes(Site) + '-' + cityMarker.id;
				
				$('#site-info-container').append('<dd id="' + siteId + '" class="site-info info-' + cityMarker.id +'">' + Site + '</dd>');
				
				paper.text(cityX + 10, cityY - 20, trip[city][site]).attr({
					'text-anchor': 'start'
				});
				cityY += 12;
			}
		}
	}

	$('#site-info-container').prepend('<dl>');
	$('#site-info-container').append('</dl>');

}

function drawEvanston() {
	cityMarkers['evanston'] = paper.circle(cities['evanston']['x'], cities['evanston']['y'], 8).attr({
			"stroke-width": "2",
			"fill": "#a0a"
	});
}

function fadeMap() {
	fadeStateOutlines();
	fadeCityMarkers();
}

function fadeStateOutlines() {
	for (var state in stateOutlines){
		stateOutlines[state].animate({"opacity": "0"}, 1800 * Math.random());
	}
}

function fadeCityMarkers() {
	for (var city in cityMarkers){
		cityMarkers[city].animate({"opacity": "0"}, 1800 * Math.random());
	}
}

function replaceWithDashes(string) {
	return string.replace(/[^0-9A-Za-z]/g,'-');
}

</script>
</body>
</html>
