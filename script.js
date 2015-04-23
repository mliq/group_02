function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

var Fruit = function(name){
    this.name = name;
    this.qty = 0;
    this.prices = [];
}

var Market = {
    apples: randomNumber(50, 999) / 100,
    oranges: randomNumber(50, 999) / 100,
    bananas: randomNumber(50, 999) / 100,
    pears: randomNumber(50, 999) / 100
};
var Person = {
    apples: [],
    oranges: [],
    bananas: [],
    pears: [],
    budget: 100
};
function priceChange(price) {
    price += randomNumber(-50, 50) / 100;
    if (price > 9.99) {
        price = 9.99;
    } else if (price < .50) {
        price = .50;
    }
    price = Math.round(price * 100) / 100;
    return price;
}

function avgArray(array) {
    if (array.length == 0) {
        return 0;
    }
    var sum = array.reduce(function (a, b) {
        return a + b;
    });
    return sum / array.length;
}

$(document).ready(function () {
    $("#apples").append("<br>Price: $<p id='markAp'>" + Market.apples + "</p>");
    $("#oranges").append("<br>Price: $<p id='markOr'>" + Market.oranges + "</p>");
    $("#bananas").append("<br>Price: $<p id='markBa'>" + Market.bananas + "</p>");
    $("#pears").append("<br>Price: $<p id='markPe'>" + Market.pears + "</p>");
    $("#userInfo").append("<p>Budget: " + Person.budget + "</p>");

    setInterval(function () {
        for (var fruit in Market) {
            Market[fruit] = priceChange(Market[fruit]);
        }

        $("#markAp").html(Market.apples);
        $("#markOr").html(Market.oranges);
        $("#markBa").html(Market.bananas);
        $("#markPe").html(Market.pears);
    }, 15000);

    $(".btn").on("click", function () {
        if (Person.budget - Market[this.id] < 0) {
            alert("Insufficient funds");
        } else {
            Person[this.id].push(Market[this.id]);
            Person.budget -= Market[this.id];
            $("#userInfo").html("<p>Budget: $" + Person.budget + "</p><p>Apples: " + Person.apples.length + " at an average price of $" + avgArray(Person.apples) + "</p>" + "<p>Oranges: " + Person.oranges.length + " at an average price of $" + avgArray(Person.oranges) + "</p>" + "<p>Bananas: " + Person.bananas.length + " at an average price of $" + avgArray(Person.bananas) + "</p>" + "<p>Pears: " + Person.pears.length + " at an average price of $" + avgArray(Person.pears) + "</p>");
        }

    });
});

