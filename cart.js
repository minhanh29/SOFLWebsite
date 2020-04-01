/*Cart Functions*/
//Add numbers of items to the cart icon
var countItem = 0;   //set the number of items purchased
/*2.4.6 - a - shopping cart*/
var cart = new Array(); //contain which item has been added

//examine if value is in the array
function include(array, value) {
    for (var i = 0; i < array.length; i++){
        if (array[i] == value)
            return true;
    }

    return false;
}

//add function to the "Add to cart" buttons 
setAddToCart("trick");   //for the trick preview box
setAddToCart("purchase");   //for the trick's own page
function setAddToCart(className) {
    var items = document.getElementsByClassName(className);  //find all the button containers in the page

    for (var i = 0; i < items.length; i++) {   //apply onclick envent to each "Add to cart" button
        var addButton = items[i].getElementsByTagName("button")[0];      /*2.4.6 - e - shopping cart*/
        addButton.addEventListener("click", function() {
                addItem(this);
        });
    }
}


//add function to the "Buy Now" button
setBuy();
function setBuy() {
    var items = document.getElementsByClassName("trick");  //find all the button containers in the page

    for (var i = 0; i < items.length; i++) {   //apply onclick envent to each "Buy Now" button
    var buyButton = items[i].getElementsByTagName("button")[1];
    buyButton.addEventListener("click", function() {
        addItem(this);
        showCart();
    });
    }
}


//add item to the cart
var sound = new Audio(document.getElementById("sound").innerHTML); //add the audio source
function addItem(button) {
    //get the name of the trick
    var name = button.name;
    
    if (countItem >= 9) {
        window.alert("The maximum number of products is 9");
    } 
    else if (include(cart, name)) {
        window.alert("You can add this trick once only!");
    }
    else {
        //clear the text "Your cart is empty" 
        if (countItem == 0) {
            document.getElementById("cartBody").innerHTML = ""; 
        }
        
        //increase the number of purchased items by 1
        countItem++;
        addContent(button);
        addNumberIcon(countItem);
        cart.push(name);
        sound.play();
    }     
}


//update the cart icon to display how many items are added
function addNumberIcon(num) {
    var imgSrc = ["cart.png", "cart1.png", "cart2.png", "cart3.png", "cart4.png", "cart5.png", "cart6.png", "cart7.png", "cart8.png", "cart9.png"];
    var cartIcon = document.getElementById("cart").src;
    var imgIndex = cartIcon.indexOf("cart");       //find the index of cart(1, 2,...).png to replace by a new image
    var source = cartIcon.slice(0, imgIndex);      //remove the old img name
    
    source += imgSrc[num];      //add the new img name 

    document.getElementById("cart").src = source;
}


//Set up the table to display the cart content
function addContent(button) {
    var container = button.parentElement.parentElement;   //get to the class "trick" that contains button - event
    
    var image = container.getElementsByTagName("a")[0].getElementsByTagName("img")[0].outerHTML,   //get the image for the trick
    title = container.getElementsByTagName("a")[0].getElementsByTagName("h2")[0].innerHTML,   //get the title
    subTitle = container.getElementsByTagName("a")[0].getElementsByTagName("h3")[0].innerHTML,     //get the subtitle
    price = container.getElementsByTagName("a")[0].getElementsByTagName("p")[0].innerHTML,   //get the price
    content = "<tr><td>";   //create a row to display the trick information

    price = removeDecimal(price);  //remove .00 from the price

    var remove = " <span id='remove' onclick='removeItem(this)'>&#10005;</span>";  //create a remove button

    content += image + "</td><td>";     //add image
    content += title + " - " + subTitle;   // add title, ans subtitle in a new cell
    content += "</td><td class='price'>" + price + remove + "</td>";    //add price and remove button in a new cell

    document.getElementById("cartBody").innerHTML += content;   //add the content into the table
    updateTotal();
}

//remove .00 for the price
function removeDecimal(num) {
    return "$" + parseInt(num.slice(1));
} 

//update the total price
function updateTotal() {
    var prices = document.getElementsByClassName("price");
    var total = 0;

    /*2.4.6 - a - shopping cart*/
    for (var i = 0; i < prices.length; i++) {
        total += parseFloat(prices[i].textContent.slice(1));   //remove the $ and add the price to total
    }

    document.getElementById("total").innerHTML = "$" + total;
}


//purchase the products
function purchase() {
    if (countItem > 0) {
        window.alert("You have purchased " + countItem + " tricks. Thank you!");

        resetCart();
        hideCart();
        location.reload();
    }
    else {
        window.alert("Please add items to purchase.")
    }
}


//remove item from the cart 
function removeItem (item) {
    countItem--;
    
    cart.splice(cart.indexOf(item.name), 1);   //remove item from the data array

    item.parentElement.parentElement.remove();

    updateTotal();   //update the total price

    if (countItem == 0)
    resetCart();
}


//reset the cart status
function resetCart() {
    countItem = 0;
    addNumberIcon(countItem);
    document.getElementById("cartBody").innerHTML ="<tr><td></td><td>Your cart is empty</td><td></td></tr>";  
    document.getElementById("total").innerHTML = "$0";             
}
