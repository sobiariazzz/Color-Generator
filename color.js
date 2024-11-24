

let but = document.getElementById("but");
but.onclick = () => {
let letters = "0123456789ABCDEF";
let colors = "#";

for (let i = 0; i<6; i++){
    colors += letters[Math.floor(Math.random() *16 )];
}

document.body.style.backgroundColor=colors;

}



// let colors = ['black' , 'purple' , 'white' , 'red'];
// let favColor = "";
// for (let i=0; i<1; i++){
//     favColor+=colors[Math.floor(Math.random() *colors.length)]
//     document.write(favColor);
// }
// document.body.style.backgroundColor=favColor;
