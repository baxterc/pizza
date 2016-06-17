- Create a pizza object with a size and topping using a pizza constructor.
Sample Input: Clicks a button that constructs a pizza
Sample Output: thisPizza = {pizzaSize: "medium", pizzaTopping: "extra cheese"}

- Allow the user to select a single topping via a prototype.
Sample Input: "olives"
Sample Output: thisPizza = {pizzaSize: "medium", pizzaTopping: "olives"}

- Allow the user to add multiple toppings via a prototype.
Sample Input: "sausage", "peppers", "onions"
Sample Output: thisPizza = {pizzaSize: "medium", pizzaTopping: ["sausage", "peppers", "onions"]}

- Construct a topping object rather than just a string to allow price to be associated with the topping chosen by the user.
Sample Input: "sausage", 1
Sample Output: thisPizza = {pizzaSize: "medium", pizzaTopping: Array[1]}
  thisPizza.pizzaTopping[0] = Topping {toppingName: "sausage", toppingPrice: 1}

- Create an input for crust size that will then construct a crust size object and add it to the pizza object via a prototype.
Sample Input: "large", 5
Sample Output: thisPizza = {pizzaSize: Array[1], pizzaTopping: Array[1]}
  thisPizza.pizzaSize[0] = Size {crustSize: "large",sizePrice = 5}

- Take the price of each topping on the pizza and add it to the pizza's total price.
Sample Input: {"olives", 1} , {"sausage", 3} , {"onions", 1}
Sample Output: thisPizza.pizzaPrice = 5

- Include a "base" array for each pizza to include size, crust style, and sauce objects with prices related to each.
Sample Input: {"deep dish", 2} , {"marinara", 2}
Sample Output: thisPizza.pizzaBase[1] = {"marinara", 2}

- Take the price of each base and add it to the pizza's total price.
Sample Input: {"deep dish", 2} , {"marinara", 2}
Sample Output: thisPizza.pizzaPrice = 4

- Compare user input from a radio button for crust size with an array of crust size objects, and put the crust size into the pizza object.
Sample Input: User clicks on option for "Large"
Sample Output: thisPizza.pizzaBases[0] = {sizeName: "large", basePrice: 16}
