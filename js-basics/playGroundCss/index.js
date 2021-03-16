let pastelsColors = ["coral","#F7F6CF","#B6D8F2","#F4CFDF","#5784BA","#9AC8EB",
"#9AD9DB", "#218B82", "#C47482","#2CCED2","#37667E","#B8E0F6","#F7CE76","8DA47E"]

function cngCol() {
    let bc = document.querySelector("div.second");
    bc.style.backgroundColor = pastelsColors[Math.floor(Math.random()*pastelsColors.length)]
}