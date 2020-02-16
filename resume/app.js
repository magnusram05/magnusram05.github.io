var App =  {
    getExperience: function (){
    	START_YEAR = "09/05/2005";
        DAY_MILLIS = 1000*60*60*24*365;
        var yearsOfExperience = (Date.now() - Date.parse(START_YEAR))/(DAY_MILLIS);
        var truncated = yearsOfExperience.toString().substring(0, yearsOfExperience.toString().indexOf("."));
        return truncated;
	},
	setNumYearsExperience: function(){
		document.getElementById("num_years").textContent=this.getExperience();
	}
}

window.onload = function(){
	App.setNumYearsExperience();	
}