//Business Logic

function Pizza(size, topping) {
  this.pizzaSize = size;
  this.pizzaTopping = topping;
}

Pizza.prototype.toppingAdd = function (topping) {
  this.pizzaTopping = topping;
};

//UI Logic
$("document").ready(function() {
  $("button#pizzaOven").click(function() {
    var thisPizza = new Pizza("medium", "extra cheese");
    var topping1 = $("#topping").val();
    thisPizza.toppingAdd(topping1);
    console.log(thisPizza);
    $(".pizzaDisplay").text(thisPizza);
  });
});
