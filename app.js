$(document).ready(function() {
    
    const selectedStarter = {
        dish: "(None)",
        price: 0
    }
    const selectedMain = {
        dish: "(None)",
        price: 0
    }
    const selectedDessert = {
        dish: "(None)",
        price: 0
    }
    const starter = {
        firstDish: "Blooming Onion",
        firstDishPrice: 7,
        secondDish: "Fried Pickles",
        secondDishPrice: 3,
        thirdDish: "Caesar Salad",
        thirdDishPrice: 5
    }
    const main = {
        firstDish: "Hamburger",
        firstDishPrice: 12,
        secondDish: "Saloman",
        secondDishPrice: 18,
        thirdDish: "Steak",
        thirdDishPrice: 15
    }
    const dessert = {
        firstDish: "Ice Cream",
        firstDishPrice: 7,
        secondDish: "Pie",
        secondDishPrice: 3,
        thirdDish: "Cake",
        thirdDishPrice: 5
    }
    function total() {
        return `$${selectedStarter.price + selectedMain.price + selectedDessert.price}.00`;
    }

    function selectedStarterFnc(dish, price) {
      selectedStarter.price = price;
      selectedStarter.dish = dish;
      $("#total").html(total());
      return dish + " $" + price + ".00";
    }

    function selectedMainFnc(dish, price) {
      selectedMain.price = price;
      selectedMain.dish = dish;
      $("#total").html(total());
      return dish + " $" + price + ".00";
    }

    function selectedDessertFnc(dish, price) {
      selectedDessert.price = price;
      selectedDessert.dish = dish;
      $("#total").html(total());
      return dish + " $" + price + ".00";
    }
    
    
    document.getElementById("btapp1").value =
        `$${starter.firstDishPrice}.00`;

    document.getElementById("btapp2").value =
        `$${starter.secondDishPrice}.00`;

    document.getElementById("btapp3").value =
        `$${starter.thirdDishPrice}.00`;

    
    document.getElementById("btmain1").value =
        `$${main.firstDishPrice}.00`;

    document.getElementById("btmain2").value =
        `$${main.secondDishPrice}.00`;

    document.getElementById("btmain3").value =
        `$${main.thirdDishPrice}.00`;

    
    document.getElementById("btdes1").value =
        `$${dessert.firstDishPrice}.00`;

    document.getElementById("btdes2").value =
        `$${dessert.secondDishPrice}.00`;

    document.getElementById("btdes3").value =
        `$${dessert.thirdDishPrice}.00`;

    
    document.getElementById("selectedStarter").innerHTML =
        selectedStarter.dish + " $" + selectedStarter.price + ".00";

    document.getElementById("selectedMain").innerHTML =
        selectedMain.dish + " $" + selectedMain.price + ".00";

    document.getElementById("selectedDessert").innerHTML =
        selectedDessert.dish + " $" + selectedDessert.price + ".00";


    $("#btMenu").click(function() {
        $("#bodyboi").css("visibility", "visible")
        $("#btMenu").css("display", "none")
        $("#welcome").css("display", "none")
    });
    $("#btapp1").click(function() {
        $("#liStarter").children("li").children("input").css("background-color", "red");
        $("#selectedStarter").html(selectedStarterFnc(starter.firstDish, starter.firstDishPrice));
        $(this).css("background-color", "grey");
    });
    
    $("#btapp2").click(function() {
        $("#liStarter").children("li").children("input").css("background-color", "red");
        $("#selectedStarter").html(selectedStarterFnc(starter.secondDish, starter.secondDishPrice));
        $(this).css("background-color", "grey");
    });
    
    $("#btapp3").click(function() {
        $("#liStarter").children("li").children("input").css("background-color", "red");
        $("#selectedStarter").html(selectedStarterFnc(starter.thirdDish, starter.thirdDishPrice));
        $(this).css("background-color", "grey");
    });

    $("#btmain1").click(function() {
        $("#liMain").children("li").children("input").css("background-color", "red");
        $("#selectedMain").html(selectedMainFnc(main.firstDish, main.firstDishPrice));
        $(this).css("background-color", "grey");
    });  

    $("#btmain2").click(function() {
        $("#liMain").children("li").children("input").css("background-color", "red");
        $("#selectedMain").html(selectedMainFnc(main.secondDish, main.secondDishPrice));
        $(this).css("background-color", "grey");
    });  
     
    $("#btmain3").click(function() {
        $("#liMain").children("li").children("input").css("background-color", "red");
        $("#selectedMain").html(selectedMainFnc(main.thirdDish, main.thirdDishPrice));
        $(this).css("background-color", "grey");
    });    

    
    $("#btdes1").click(function() {
        $("#liDessert").children("li").children("input").css("background-color", "red");
        $("#selectedDessert").html(selectedDessertFnc(dessert.firstDish, dessert.firstDishPrice));
        $(this).css("background-color", "grey");
    }); 

    $("#btdes2").click(function() {
        $("#liDessert").children("li").children("input").css("background-color", "red");
        $("#selectedDessert").html(selectedDessertFnc(dessert.secondDish, dessert.secondDishPrice));
        $(this).css("background-color", "grey");
    }); 

    $("#btdes3").click(function() {
        $("#liDessert").children("li").children("input").css("background-color", "red");
        $("#selectedDessert").html(selectedDessertFnc(dessert.thirdDish, dessert.thirdDishPrice));
        $(this).css("background-color", "grey");
    })    
})
