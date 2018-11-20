define(['knockout','jquery'], function(ko,$) {
    function DayOf100ViewModel() {
    	var obj = this;
        this.data = ko.observableArray();	
        $.ajax({
			  url: "src/app/data/data.json",
			  dataType: "json",
			  success: function(response) {
			  	 $.each(response.data.days, function(item,value) {
			      obj.data.push(value);
			    });
			  }
			});	 
    } 
    return DayOf100ViewModel;
});



