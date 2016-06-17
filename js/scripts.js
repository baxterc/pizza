//Business Logic

function Pizza(size, topping) {
  this.pizzaSize = size;
  this.pizzaTopping = [];
}

function Topping(topping, price) {
  this.toppingName = topping;
  this.toppingPrice = price;
}

Pizza.prototype.toppingAdd = function (topping) {
  this.pizzaTopping.push(topping);
};

//UI Logic
$("document").ready(function() {
  $("button#pizzaOven").click(function() {
    var thisPizza = new Pizza("medium", "extra cheese");
    var t1 = $("#topping1").val();
    var thisTopping = new Topping(t1, 1)
    thisPizza.toppingAdd(thisTopping);
    console.log(thisPizza);
    console.log(thisPizza.pizzaTopping[0]);
    $(".pizzaDisplay").text(thisPizza);
  });
});
