

function DNAStrand(dna){
    let array = Array.from(dna);
    let newArray = array.map(v=>
      v=='A'?'T':
        v==="T"?"A":
            v==="C"?"G":
                v==="G"? "C": v);
                          let newDna = newArray.join('');
    return newDna;
  }

console.log(DNAStrand('GTAT'))


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