function getShop(event) {
  window.location.href = "ShopNow.html";
  $("#CS").hide();
  $("#DE").hide();
  $("#SP").show();
}
function addItem(event) {
  window.location.href = "addItem.html";
}

let books = [];

if (window.localStorage.getItem("books")) {
  books = JSON.parse(window.localStorage.getItem("books"));
}

if (books.length != 0) {
  $("#empty").hide();

  books.forEach(function(e) {
    console.log(e);
    let item = $("<li>").attr("class", "list-group-item");
    let div1 = $("<div>").attr("class", "card sty");
    let img = $("<img src=" + e.url + ' class="card-img-top sty">');
    div1.append(img);
    let div2 = $("<div>").attr("class", "card-body");

    div2.append(
      $("<h5>")
        .attr("class", "card-title text-dark")
        .text(e.name)
    );
    div2.append(
      $("<p>")
        .attr("class", "card-text text-dark")
        .text(e.meg)
    );
    div2.append(
      $("<p>")
        .attr("class", "card-text text-dark")
        .text("Price-")
        .append($("<span>").text(e.price))
    );
    div2.append(
      $("<p>")
        .attr("class", "card-text text-dark")
        .text("Quantity-" + e.qun)
    );
    div2.append(
      $("<button>")
        .attr("class", "btn btn-primary add_items")
        .text("Add to Cart")
    );
    div2.append(
      $("<button>")
        .attr("class", "btn-outline-info get_des")
        .text("Description")
    );
    div1.append(div2);
    item.append(div1);
    $("#list2").append(item);
  });
}

$("#add").click(function(e) {
  var name = $("#name").val();
  var message = $("#message").val();
  var URL = $("#photoURL").val();
  var quantity = $("#quan1").val();
  var price = $("#price1").val();

  if (name && message && URL && quantity && price) {
    let item = $("<li>").attr("class", "list-group-item");
    let div1 = $("<div>").attr("class", "card");

    div1.append($("<img>").attr("src", URL));
    let div2 = $("<div>").attr("class", "card-body");

    div2.append(
      $("<h5>")
        .attr("class", "card-title")
        .text(name)
    );
    div2.append(
      $("<p>")
        .attr("class", "card-text")
        .text(message)
    );
    div2.append(
      $("<p>")
        .attr("class", "card-text")
        .text(price)
    );
    div2.append(
      $("<p>")
        .attr("class", "card-text")
        .text(quantity)
    );
    div2.append(
      $("<button>")
        .attr("class", "btn btn-primary")
        .text("Add to Cart")
    );
    div2.append(
      $("<button>")
        .attr("class", "btn-outline-info")
        .text("Description")
    );
    div1.append(div2);
    item.append(div1);
    $("#list2").append(item);
    books.push({
      name: name,
      meg: message,
      url: URL,
      qun: quantity,
      price: price
    });
    window.localStorage.setItem("books", JSON.stringify(books));
  } else {
    console.log("fields empty");
  }
});

$("#back").click(function(e) {
  window.location.href = "buyItem.html";
});
var cart = [];

var cart_count = 0;
var qunt = 0
$(".add_items").click(function(e) {
  cart_count++;
  var parent = $(this).parent();

  var img1 = $(this)
    .parent()
    .parent()
    .children("img")
    .eq(0)
    .attr("src");
  name = parent
    .children()
    .eq(0)
    .text();
  price = parent
    .children()
    .children()
    .eq(0)
    .text();
  //quantity = parent
    //.children()
    //.eq(3)
    //.text();
  cart.push({ name: name, url: img1, /*qun: qunt*/ price: price });
  window.localStorage.setItem("cart", JSON.stringify(cart));
  var sum = 0;

  for (var i = 0; i < cart.length; i++) {
    sum = sum + parseInt(cart[i].price);
  }
  console.log(sum);
  let temp = $(
    '\
          <tr>\
            <td class="center-it text-gold" scope="row">' +
      cart_count +
      '</td>\
            <td class="center-it"><img class="cart-img" src="' +
      img1 +
      '" /></td>\
            <td class="center-it text-gold">' +
      name +
      '</td>\
            <td class="center-it text-gold">' +
      price +
      '</td >\
            <td class="center-it" text-gold id="delrow"><button class="btn btn-light delete" title="Delete" data-toggle="tooltip"><i class="material-icons text-danger">&#xE872;</i></button></td>\
        </tr>'
  );
  var total = $("#total").text("Total: " + sum);
  $("#cart-list").append(temp);
  $("#cart-list").append(total);

});
console.log(cart);
//<td class="center-it text-gold">' +
//qunt +
//'</td>\
$("#CS").hide();
$("#DE").hide();

$("#back-to-shopping").click(function(e) {
  $("#CS").hide();
  $("#SP").show();
});

$(".cartItem").click(function(e) {
  $("#SP").hide();
  $("#CS").show();
});

$(".get_des").click(function(e) {
  $("#SP").hide();
  $("#DE").show();
  $("#CS").hide();
  var parent = $(this).parent();
  var img3 = $(this)
    .parent()
    .parent()
    .children("img")
    .eq(0)
    .attr("src");
  name = parent
    .children()
    .eq(0)
    .text();
  mesg = parent
    .children()
    .eq(1)
    .text();
  price = parent
    .children()
    .eq(2)
    .text();
  var div = $("#DE");
  let img2 = $("<img src=" + img3 + ' class="sty">');
  var div1 = $("<div>");
  div1.append($("<h5>").text(name));
  div1.append(img2);
  div1.append($("<p>").text(mesg));
  div1.append($("<p>").text(price));
  let btn = $('<button id="goback" class="btn btn-primary ">Go Back</button>');
  div.append(div1);
  div.append(btn);
});

$("#goback").click(function(e) {
  $("#DE").hide();
  $("#SP").show();
  $("#DE").empty();
});
console.log(cart);

$(".delete").click(function(e) {
  
  $('#delrow').remove();
    
});

/*if (localStorage.length > 0 ) {
    localStorage.clear();
}*/
