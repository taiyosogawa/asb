// JavaScript Document

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
	 
	var siteClasses = {};		// We will store all the CSS classes here
	
	for (var trip in records){
		
		
		for (var city in records[trip]) {
			var cityX = cities[city]['x'];
			var cityY = cities[city]['y'];
			
			siteClasses[city] = trip + '_' + city.replace(/[^0-9A-Za-z]/g,'-');
			
			var cityMarker = paper.circle(cityX, cityY, 5).attr({
				"stroke-width": "1",
				"fill": "#a00"
			}).click(function () {
				$('.' + siteClasses[city]).toggle();
			});
			
			// Create labels and divs for each site
			for (var site in records[trip][city]) {
				var Site = records[trip][city][site];
				var siteId = trip + '_' + Site.replace(/ /g,'');
				siteId = siteId.replace(/[^0-9A-Za-z]/g,'-');
				
	
				$('#site-info-container').append('<div id="' + siteId + '" class="site-info ' + siteClasses[city] + '">'
						+ Site +
					'</div>');
				//$('#' + siteId).hide();
				
				paper.text(cityX + 10, cityY - 20, records[trip][city][site]).attr({
					'text-anchor': 'start'
				});
				cityY += 12;
			}
		}
	}
	
	paper.circle(cities['evanston']['x'], cities['evanston']['y'], 8).attr({
			"stroke-width": "2",
			"fill": "#a0a"
	});
	
  }