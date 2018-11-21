define(['knockout','jquery'], function(ko,$) {
    function DayOf100ViewModel() {
    	var obj = this;
        this.round = ko.observable();	
        this.days = ko.observableArray();        
        $.ajax({
			  url: "src/app/data/data.json",
			  dataType: "json",
			  success: function(response) {
			  	 obj.round(response.data.round);
			  	 $.each(response.data.days, function(item,value) {
			      obj.days.push(value);
			    });
			  }
			});	 
    } 
    DayOf100ViewModel.prototype.id = function(index){
    	return this.days().length-index;
    }
    return DayOf100ViewModel;
});



