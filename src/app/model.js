function Days(){
    this.dayof100 = 0;
    this.date = Date.now();
    this.description = "";
    this.resource = [];
}
Days.prototype.setDayOf100 = function(dayof100){
	this.dayof100 = dayof100;
}
Days.prototype.setDate = function(date){
	this.date = date;
}
Days.prototype.description = function(description){
	this.description = description;
}
Days.prototype.addResource = function(resource){
	this.resource.add(resource);
}

function Resource(){
	this.type = "";
	this.url = "";
	this.displayText = "";
}
Resource.prototype.setType = function(type){
    this.type = type;
}
Resource.prototype.setUrl = function(url){
    this.url = url;
}
Resource.prototype.displayText = function(displayText){
    this.displayText = displayText;
}