
// update price based on the quantity of item the customer wants to buy


function updatePrice() {
    var input = Number(document.getElementById('quantity').value);
    var currentlist = document.getElementById('product-price').innerHTML.split(" ");
    var current = Number(currentlist[1]);
    var update = String(input*current)
    document.getElementById('product-price').innerHTML = "$ " + update;
}