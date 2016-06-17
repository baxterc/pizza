//Business Logic

function Pizza(base, topping) {
  this.pizzaBase = [];
  this.pizzaTopping = [];
}

function Size(size, price) {
  this.sizeName = size;
  this.sizePrice = price;
}

function Topping(topping, price) {
  this.toppingName = topping;
  this.toppingPrice = price;
}

Pizza.prototype.sizeAdd = function (size) {
  this.pizzaBase.push(size);
};

Pizza.prototype.toppingAdd = function (topping) {
  this.pizzaTopping.push(topping);
};


//UI Logic
$("document").ready(function() {
  $("button#pizzaOven").click(function() {
    var thisPizza = new Pizza("medium", "extra cheese");

    var s1 = $("#base1").val();
    var thisSize = new Size(s1, 5);
    var t1 = $("#topping1").val();
    var topping1 = new Topping(t1, 1)
    var t2 = $("#topping2").val();
    var topping2 = new Topping(t2, 3)
    var t3 = $("#topping3").val();
    var topping3 = new Topping(t3, 2)
    thisPizza.sizeAdd(thisSize);
    thisPizza.toppingAdd(topping1);
    thisPizza.toppingAdd(topping2);
    thisPizza.toppingAdd(topping3);
    // console.log(thisPizza);
    // console.log(thisPizza.pizzaTopping[0]);
    debugger;
  });
});
