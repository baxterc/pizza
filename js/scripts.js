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

function Size(size) {
  var sizes = [
    {sizeName: "personal", basePrice: 8},
    {sizeName: "medium", basePrice: 12},
    {sizeName: "large", basePrice: 16},
    {sizeName: "xlarge", basePrice: 20},
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
    var newSize = $('input:radio[name="size"]:checked').val();
    var newCrust = $('input:radio[name="crust"]:checked').val();
    var newSauce = $('input:radio[name="sauce"]:checked').val();

    var thisSize = new Size(newSize);
    var thisCrust = new Crust(newCrust);
    var thisSauce = new Sauce(newSauce);
    // var t1 = $("#topping1").val();
    // var topping1 = new Topping(t1, 1)
    // var t2 = $("#topping2").val();
    // var topping2 = new Topping(t2, 3)
    // var t3 = $("#topping3").val();
    // var topping3 = new Topping(t3, 2)
    thisPizza.baseAdd(thisSize);
    thisPizza.baseAdd(thisCrust);
    thisPizza.baseAdd(thisSauce);
    // thisPizza.toppingAdd(topping1);
    // thisPizza.toppingAdd(topping2);
    // thisPizza.toppingAdd(topping3);
    // pizzaPriceCalc(thisPizza);
    thisPizza.pizzaPriceCalc();
    // console.log(thisPizza);
    // console.log(thisPizza.pizzaTopping[0]);
    debugger;
  });
});
