var timer = {
	minTimeoutId : '',
	halfTimeoutId: '',
	maxTimeoutId: '',
	clock: '',

	start: function(){
		this.reset();
		let time = 0;
	    let displayTime = 0;
		this.clock = window.setInterval(function(){		 
	    	time = time + 1;
    	  	if(time >= 60){
    	  		let min = Math.floor(time/60);
    	  		let sec = time%60;
    	  		if(sec < 10){
    	  			sec = "0"+sec;
    	  		}
                displayTime = min + ":" + sec;
    	  	} else {
    	  		if(time < 10) {
    	  			displayTime = ":0"+time;
    	  		} else {
    	  			displayTime = ":"+time;
    	  		}
    	  	}
    	  	document.getElementById("counter").innerHTML =  displayTime;  	  	
	    }, 1000);		

		var minTimeSel = document.getElementById("min_time_sel")
		var minTime = minTimeSel.options[minTimeSel.selectedIndex].value * 60 * 1000;

		var maxTimeSel = document.getElementById("max_time_sel")
		var maxTime = maxTimeSel.options[maxTimeSel.selectedIndex].value * 60 * 1000;


		var halfTime = (maxTime - minTime)/2;

		var green_overlay = document.getElementById("green_overlay");
	    var amber_overlay = document.getElementById("amber_overlay");	
	    var red_overlay = document.getElementById("red_overlay");		    

	    this.minTimeoutId = window.setTimeout(function(){   	        	
	    	green_overlay.className = "green_dot";
	    }, minTime);
	    this.halfTimeoutId = window.setTimeout(function(){
	    	amber_overlay.className = "amber_dot";
	    	green_overlay.className = "overlay";	    	
	    }, minTime + halfTime);
	    this.maxTimeoutId = window.setTimeout(function(){
	    	red_overlay.className = "red_dot";
	        amber_overlay.className = "overlay";
	    	green_overlay.className = "overlay";
	    }, maxTime);
	},

	reset : function(){
		window.clearTimeout(this.minTimeoutId);
		window.clearTimeout(this.halfTimeoutId);
		window.clearTimeout(this.maxTimeoutId);
		window.clearTimeout(this.clock);
		var green_overlay = document.getElementById("green_overlay");
	    var amber_overlay = document.getElementById("amber_overlay");	
	    var red_overlay = document.getElementById("red_overlay");	
	    red_overlay.className = "overlay";
	    amber_overlay.className = "overlay";
	    green_overlay.className = "overlay";
	    document.getElementById('counter').innerHTML = '0';    
	},

	stop : function(){
		window.clearTimeout(this.minTimeoutId);
		window.clearTimeout(this.halfTimeoutId);
		window.clearTimeout(this.maxTimeoutId);
		window.clearTimeout(this.clock);
		var speakerNameArray = document.getElementsByClassName("speaker-name")
		this.addElement(speakerNameArray.length+1, document.getElementById('counter').innerHTML);		
	},

	addElement: function(name, time){
	  	var speakerNameDiv = document.createElement("div"); 	  	
	  	var name = document.createTextNode("S-"+name); 
  		speakerNameDiv.appendChild(name);  
  		speakerNameDiv.setAttribute("class", "speaker-name");

  		var speakerTimeDiv = document.createElement("div"); 	  	
	  	var speakerTime = document.createTextNode(time); 
  		speakerTimeDiv.appendChild(speakerTime);  
  		speakerTimeDiv.setAttribute("class", "speaker-time");

  		var timeList = document.getElementById("time-list"); 
  		timeList.appendChild(speakerNameDiv);
  		timeList.appendChild(speakerTimeDiv);
	}
}