
export  const loadMenu = function () {

    const beverages = document.createElement("div");
    beverages.classList.add("category");
    beverages.innerHTML = "<strong>Beverages</strong>"

    const sides = document.createElement("div");
    sides.classList.add("category");
    sides.innerHTML = "<strong>Sides</strong>"

    const mainDishes = document.createElement("div");
    mainDishes.classList.add("category");
    mainDishes.innerHTML = "<strong>Main Dishes</strong>"

    const honeyTea = document.createElement("div");
    honeyTea.classList.add("food-type");
    honeyTea.id = "honey-tea";
    honeyTea.innerHTML = "<p><strong>Honey Tea</strong></p> <p> A warm, sweet tea made with the highest quality honey and a bit of lemon and giner to start you day!</p> <p><strong>$5 </strong></p>"

    const bearyTea = document.createElement("div");
    bearyTea.classList.add("food-type");
    bearyTea.id = "beary-tea";
    bearyTea.innerHTML = "<p><strong>Beary Tea</strong></p> <p> A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.</p> <p><strong>$4 </strong></p>"

    const toastAndJam = document.createElement("div");
    toastAndJam.classList.add("food-type");
    toastAndJam.id = "toast-jam";
    toastAndJam.innerHTML = "<p><strong>Toast and Jam</strong></p> <p> A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.</p> <p><strong>$5 </strong></p>"

    const freshFruit = document.createElement("div");
    freshFruit.classList.add("food-type");
    freshFruit.id = "fresh-fruit";
    freshFruit.innerHTML = "<p><strong>Fresh Fruit</strong></p> <p> A small bowl of fresh fruit, whatever we find at the market for the day.</p> <p><strong>$5.2 </strong></p>"

    const pancakes = document.createElement("div");
    pancakes.classList.add("food-type");
    pancakes.id = "pancakes";
    pancakes.innerHTML = "<p><strong>Pancakes</strong></p> <p> A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.</p> <p><strong>$7</strong></p>"

    const frenchToast = document.createElement("div");
    frenchToast.classList.add("food-type");
    frenchToast.id = "french-toast";
    frenchToast.innerHTML = "<p><strong>French Toast</strong></p> <p> Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.</p><p><strong>$7.5</strong></p>"

    const bearyVeggieSandwich = document.createElement("div");
    bearyVeggieSandwich.classList.add("food-type");
    bearyVeggieSandwich.id = "beary-veggie"
    bearyVeggieSandwich.innerHTML = "<p><strong> Beary Veggie Sandwich</strong></p><p> Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.</p> <p><strong>$10</strong></p>"

    const blt = document.createElement("div");
    blt.classList.add("food-type");
    blt.id = "blt";
    blt.innerHTML = "<p><strong>BLT</strong></p> <p> Interested in the Beary Veggie Sandwich but also love bacon? Say no more.</p> <p><strong>$10</strong></p>"

    const bagelAndLox = document.createElement("div");
    bagelAndLox.classList.add("food-type");
    bagelAndLox.id = "bagel-lox"
    bagelAndLox.innerHTML = "<p><strong>Bagel and Lox</strong></p> <p> Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.</p> <p><strong>$10.5</strong></p>"

    const honeycomb = document.createElement("div");
    honeycomb.classList.add("food-type");
    honeycomb.id = "honeycomb";
    honeycomb.innerHTML = "<p><strong>Honeycomb</strong></p> <p> Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.</p> <p><strong>$9</strong></p>"

    const bearyBowl = document.createElement("div");
    bearyBowl.classList.add("food-type");
    bearyBowl.id = "beary-bowl";
    bearyBowl.innerHTML = "<p><strong>Beary Bowl</strong></p> <p> Get a big ole bowl of our berries! Side of honey is $1.25 extra.</p> <p><strong>$9</strong></p>"

    const content  = document.getElementById("content")

    content.append(beverages, sides, mainDishes, honeyTea, freshFruit, pancakes, bearyTea, toastAndJam, frenchToast, bearyVeggieSandwich, blt, bagelAndLox, honeycomb, bearyBowl)


}