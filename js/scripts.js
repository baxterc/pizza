//Business Logic

function Pizza(base, topping, price) {
  this.pizzaBases = [];
  this.pizzaToppings = [];
  this.pizzaPrice = 0;
}

function Base(type, price) {
  this.baseType = type;
  this.basePrice = price;
}

function Topping(topping, price) {
  this.toppingName = topping;
  this.toppingPrice = price;
}

Pizza.prototype.baseAdd = function (base) {
  this.pizzaBases.push(base);
};

Pizza.prototype.toppingAdd = function (topping) {
  this.pizzaToppings.push(topping);
};

Pizza.prototype.pizzaPriceCalc = function() {
  var totalPrice = this.pizzaPrice;
  var baseArr = this.pizzaBases;
  var topArr = this.pizzaToppings;
  
  baseArr.forEach(function(base) {
    var bPrice = base.basePrice;
    totalPrice += bPrice;
  });
  topArr.forEach(function(top) {
    var tPrice = top.toppingPrice;
    totalPrice += tPrice;
  });
};



function pizzaPriceCalc(pizza) {
  pizza.pizzaBases.forEach(function(base) {
    var bPrice = base.basePrice;
    pizza.pizzaPrice += bPrice;
    console.log(bPrice);
    console.log(pizza.pizzaPrice);
  });
  pizza.pizzaToppings.forEach(function(top) {
    var tPrice = top.toppingPrice;
    pizza.pizzaPrice += tPrice;
    console.log(tPrice);
    console.log(pizza.pizzaPrice);
  });
};

//UI Logic
$("document").ready(function() {
  $("button#pizzaOven").click(function() {
    var thisPizza = new Pizza;
    var b1 = $("#base1").val();
    var thisBase = new Base(b1, 5);
    var t1 = $("#topping1").val();
    var topping1 = new Topping(t1, 1)
    var t2 = $("#topping2").val();
    var topping2 = new Topping(t2, 3)
    var t3 = $("#topping3").val();
    var topping3 = new Topping(t3, 2)
    thisPizza.baseAdd(thisBase);
    thisPizza.toppingAdd(topping1);
    thisPizza.toppingAdd(topping2);
    thisPizza.toppingAdd(topping3);
    // pizzaPriceCalc(thisPizza);
    thisPizza.pizzaPriceCalc();
    // console.log(thisPizza);
    // console.log(thisPizza.pizzaTopping[0]);

  });
});
