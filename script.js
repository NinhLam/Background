const container = document.querySelector("#container");
const tile = document.querySelector(".tile");

for(let i=0; i<1599; i++){
    container.appendChild(tile.cloneNode());
}