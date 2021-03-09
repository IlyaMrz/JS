let my_box = document.getElementById('box');
// console.log(my_box);


my_box.addEventListener('click',clk);


function clk(e) {
    e.preventDefault();
    console.log(my_box)
    my_box.style.backgroundColor === "red" ? 
    my_box.style.backgroundColor = "blue" :
    my_box.style.backgroundColor = "red";
}