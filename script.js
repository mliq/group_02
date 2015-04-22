function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}


var Market = {
	apples: randomNumber(50,999)/100,
	oranges: randomNumber(50,999)/100,
	bananas: randomNumber(50,999)/100,
	grapes: randomNumber(50,999)/100,
	pears: randomNumber(50,999)/100
};

function priceChange(price){
	price += randomNumber(-50,50)/100;
	if (price > 999){
		price = 999;
	}else if (price < 50){
		price = 50;
	}
	return price;
}

$(document).ready(function(){
	$("#apples").append("<br>Price: $<p id='markAp'>" + Market.apples + "</p>");
	$("#oranges").append("<br>Price: $<p id='markOr'>" + Market.oranges + "</p>");
	$("#bananas").append("<br>Price: $<p id='markBa'>" + Market.bananas + "</p>");
	$("#grapes").append("<br>Price: $<p id='markGr'>" + Market.grapes + "</p>");
	$("#pears").append("<br>Price: $<p id='markPe'>" + Market.pears + "</p>");
	setInterval(function(){
		for (var fruit in Market){
			console.log("work1");
			fruit=priceChange(fruit);}
			console.log("work2");
		$("#markAp").html(Market.fruit);
		$("#markOr").html(Market.fruit);
		$("#markBa").html(Market.fruit);
		$("#markGr").html(Market.fruit);
		$("#markPe").html(Market.pears);
		}, 1500);

});

