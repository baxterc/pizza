//Business Logic

function Pizza(size, topping) {
  this.pizzaSize = size;
  this.pizzaTopping = [];
}

Pizza.prototype.toppingAdd = function (topping) {
  this.pizzaTopping.push(topping);
};

//UI Logic
$("document").ready(function() {
  $("button#pizzaOven").click(function() {
    var thisPizza = new Pizza("medium", "extra cheese");
    var topping1 = $("#topping1").val();
    var topping2 = $("#topping2").val();
    var topping3 = $("#topping3").val();
    thisPizza.toppingAdd(topping1);
    thisPizza.toppingAdd(topping2);
    thisPizza.toppingAdd(topping3);
    console.log(thisPizza);
    $(".pizzaDisplay").text(thisPizza);
  });
});
