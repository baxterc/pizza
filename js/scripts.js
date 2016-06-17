//Business Logic

function Pizza(size, topping) {
  this.pizzaSize = size;
  this.pizzaTopping = topping;
}

//UI Logic
$("document").ready(function() {
  $("button#pizzaOven").click(function() {
    var thisPizza = new Pizza("medium", "extra cheese");
    console.log(thisPizza);
    $(".pizzaDisplay").text(thisPizza);
  });
});
