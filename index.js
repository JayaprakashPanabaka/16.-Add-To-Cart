let userTask = document.getElementById("userTask");
let ulEl = document.getElementById("cartItems");

console.log(userTask);

function onAdd() {
    if(userTask.value === '') {
        alert("Enter valid Item to Cart");
        return;
    }
    let liEl = document.createElement('li');
    liEl.textContent = userTask.value;

    ulEl.appendChild(liEl);
    userTask.value = '';
    
}















