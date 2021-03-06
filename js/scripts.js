//Business Logic
var toppings = [];

function Pizza(base, topping, price) {
  this.pizzaBases = [];
  this.pizzaToppings = [];
  this.pizzaPrice = 0;
}
function Size(size) {
  var sizes = [
    {sizeName: "personal", basePrice: 4},
    {sizeName: "medium", basePrice: 9},
    {sizeName: "large", basePrice: 11},
    {sizeName: "xlarge", basePrice: 14},
  ]
  function findSize(sz) {
    for (s=0; s < sizes.length; s++) {
      if (sizes[s].sizeName === size) {
        return sizes[s];
      }
    }
  }
  var foundSize = findSize(size);
  this.sizeName = foundSize.sizeName;
  this.basePrice = foundSize.basePrice;
}
function Crust(crust) {
  var crusts = [
    {crustName: "original", basePrice: 1},
    {crustName: "thincrust", basePrice: 2},
    {crustName: "deepdish", basePrice: 3},
  ];
  function findCrust(cr) {
    for (c=0; c < crusts.length; c++) {
      if (crusts[c].crustName === crust) {
        return crusts[c];
      }
    }
  }
  var foundCrust = findCrust(crust);
  this.crustName = foundCrust.crustName;
  this.basePrice = foundCrust.basePrice;
}
function Sauce(sauce) {
  var sauces = [
    {sauceName: "tomato", basePrice: 0},
    {sauceName: "pesto", basePrice: 1},
    {sauceName: "alfredo", basePrice: 2},
    {sauceName: "garlic", basePrice: 0},
  ];
  function findSauce(sa) {
    for (i=0; i < sauces.length; i++) {
      if (sauces[i].sauceName === sauce) {
        return sauces[i];
      }
    }
  }
  var foundSauce = findSauce(sauce);
  this.sauceName = foundSauce.sauceName;
  this.basePrice = foundSauce.basePrice;
}
function Topping(topping, price) {
  this.toppingName = topping;
  this.toppingPrice = price;
}
Pizza.prototype.baseAdd = function(base) {
  this.pizzaBases.push(base);
};

function toppingAssemble() {
  var topArr = [];
  ($('input[name=cheese]:checked')).each(function() {
    var top = ($(this).val());
    var thisTopping = new Topping(top, 2);
    topArr.push(thisTopping);
  });
  ($('input[name=veggie]:checked')).each(function() {
    var top = ($(this).val());
    var thisTopping = new Topping(top, 1);
    topArr.push(thisTopping);
  });
  ($('input[name=meat]:checked')).each(function() {
    var top = ($(this).val());
    var thisTopping = new Topping(top, 3);
    topArr.push(thisTopping);
  });
  return topArr;
}

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
  this.pizzaPrice = totalPrice;
};

//UI Logic
$("document").ready(function() {
  $("button#pizzaOven").click(function() {
    var thisPizza = new Pizza;
    var newSize = $('input:radio[name="size"]:checked').val();
    var newCrust = $('input:radio[name="crust"]:checked').val();
    var newSauce = $('input:radio[name="sauce"]:checked').val();
    var newToppings = toppingAssemble();
    var thisSize = new Size(newSize);
    var thisCrust = new Crust(newCrust);
    var thisSauce = new Sauce(newSauce);
    thisPizza.baseAdd(thisSize);
    thisPizza.baseAdd(thisCrust);
    thisPizza.baseAdd(thisSauce);
    thisPizza.pizzaToppings=newToppings;
    thisPizza.pizzaPriceCalc();
    var finalCost = thisPizza.pizzaPrice;
    $("#total").show();
    $("#totalCost").text(finalCost);
  });
});
