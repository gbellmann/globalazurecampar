(function(){
    componentHandler.registerUpgradedCallback("MaterialLayout",function(){
		$("#DateCountdown").TimeCircles({
                        "animation": "smooth",
                        "bg_width": 0.5,
                        "fg_width": 0.05333333333333334,
                        "circle_bg_color": "#60686F",
                        "time": {
                            "Days": {
                                "text": "Días",
                                "color": "#FFCC66",
                                "show": true
                            },
                            "Hours": {
                                "text": "Horas",
                                "color": "#99CCFF",
                                "show": true
                            },
                            "Minutes": {
                                "text": "Minutos",
                                "color": "#BBFFBB",
                                "show": true
                            },
                            "Seconds": {
                                "text": "Segundos",
                                "color": "#FF9999",
                                "show": true
                            }
                        },
                        "count_past_zero": false
                    });	
	});	
}());
