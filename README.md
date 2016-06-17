# Chuck's Pizza
### by Charlie Baxter
#### Object-Oriented Exercise for Epicodus, June 17, 2016

## Overview

This is an online order form for a pizzeria.  The user can select from a wide range of bases and toppings.  When the user clicks the "Bake It!" button, the total cost of the pizza will display towards the bottom of the page.  Since this is an exercise in objects, the page uses a constructor for every topping and base, which are then added to a pizza object.

## Setup
* Clone this repository.
* Open index.html using your preferred web browser.

## Technologies Used
* Javascript
* CSS
* HTML
* jQuery
* Bootstrap

## Specifications

* Create a pizza object with a size and topping using a pizza constructor.
 * Sample Input: Clicks a button that constructs a pizza
 * Sample Output: thisPizza = {pizzaSize: "medium", pizzaTopping: "extra cheese"}


- Allow the user to select a single topping via a prototype.
 * Sample Input: "olives"
 * Sample Output: thisPizza = {pizzaSize: "medium", pizzaTopping: "olives"}


- Allow the user to add multiple toppings via a prototype.
 * Sample Input: "sausage", "peppers", "onions"
 * Sample Output: thisPizza = {pizzaSize: "medium", pizzaTopping: ["sausage", "peppers", "onions"]}


- Construct a topping object rather than just a string to allow price to be associated with the topping chosen by the user.
 * Sample Input: "sausage", 1
 * Sample Output: thisPizza = {pizzaSize: "medium", pizzaTopping: Array[1]}
  thisPizza.pizzaTopping[0] = Topping {toppingName: "sausage", toppingPrice: 1}


- Create an input for crust size that will then construct a crust size object and add it to the pizza object via a prototype.
 * Sample Input: "large", 5
 * Sample Output: thisPizza = {pizzaSize: Array[1], pizzaTopping: Array[1]}
  thisPizza.pizzaSize[0] = Size {crustSize: "large",sizePrice = 5}


- Take the price of each topping on the pizza and add it to the pizza's total price.
 * Sample Input: {"olives", 1} , {"sausage", 3} , {"onions", 1}
 * Sample Output: thisPizza.pizzaPrice = 5


- Include a "base" array for each pizza to include size, crust style, and sauce objects with prices related to each.
 * Sample Input: {"deep dish", 2} , {"marinara", 2}
 * Sample Output: thisPizza.pizzaBase[1] = {"marinara", 2}


- Take the price of each base and add it to the pizza's total price.
 * Sample Input: {"deep dish", 2} , {"marinara", 2}
 * Sample Output: thisPizza.pizzaPrice = 4


- Compare user input from a radio button for crust size with an array of crust size objects, and put the crust size into the pizza object.
 * Sample Input: User clicks on button for "Large"
 * Sample Output: thisPizza.pizzaBases[0] = {sizeName: "large", basePrice: 16}


- As above, but including sauces and crust styles.
 * Sample Input: User clicks on buttons for "Medium", "Deep Dish", "Tomato Marinara"
 * Sample Output: thisPizza.pizzaBases[0] = {sizeName: "medium", basePrice: 12}
thisPizza.pizzaBases[1] = {crustName: "deepdish", basePrice: 3}
thisPizza.pizzaBases[2] = {sauceName: "tomato", basePrice: 0}


- Gather user input from checkboxes for all of the available toppings and add it to the pizza.
 * Sample Input: User clicks checkboxes for Canadian bacon and pineapple.
 * Sample Output: thisPizza.pizzaToppings[0] = {toppingName: "canadian", toppingPrice: 3}
thisPizza.pizzaToppings[1] = {toppingName: "pineapple", toppingPrice: 1}

This software is licensed under the MIT License. Copyright (c) 2016 Charlie Baxter.
