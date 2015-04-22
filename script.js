function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}


var Market = {
	apples: randomNumber(50,999)/100,
	oranges: randomNumber(50,999)/100,
	bananas: randomNumber(50,999)/100,
	pears: randomNumber(50,999)/100
};
var Person = {
	apples: [],
	oranges: [],
	bananas: [],
	pears: [],
	budget: 100
};
function priceChange(price){
	price += randomNumber(-50,50)/100;
	if (price > 9.99){
		price = 9.99;
	}else if (price < .50){
		price = .50;
	}
	return price;
}

$(document).ready(function(){
	$("#apples").append("<br>Price: $<p id='markAp'>" + Market.apples + "</p>");
	$("#oranges").append("<br>Price: $<p id='markOr'>" + Market.oranges + "</p>");
	$("#bananas").append("<br>Price: $<p id='markBa'>" + Market.bananas + "</p>");
	$("#pears").append("<br>Price: $<p id='markPe'>" + Market.pears + "</p>");

	setInterval(function(){
		for (var fruit in Market){
			Market[fruit]=priceChange(Market[fruit]);
		}

		$("#markAp").html(Market.apples);
		$("#markOr").html(Market.oranges);
		$("#markBa").html(Market.bananas);
		$("#markPe").html(Market.pears);
	}, 1500);

		$(".btn").on("click",function (){

		Person[this.id].push(Market[this.id]);
		Person.budget -= Market[this.id];
			

		});
});

