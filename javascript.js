const container = document.querySelector(".container");
const button = document.querySelector(".btn");
let gridNum = 16

button.addEventListener("click", ()=> {
    gridNum = Number(prompt("How many squares per sides would you like (max of 100): "));
    if (gridNum>100) (
        gridNum = 100
    )
    
    createGrid()
    
})
function createGrid() {
    container.innerHTML = ""
    for (let i =0;i<gridNum*gridNum;i++) {
    const cell = document.createElement("div")
    cell.classList.add("cell")
    cell.style.width = (960/gridNum)+"px";
    cell.style.height = (960/gridNum)+"px";
    const baseColor = getRandomRGB();
    let opacity = 0
    cell.style.backgroundColor = `rgba(0, 0, 0, 0)`;
    cell.addEventListener("mouseenter", () => {
        opacity+=0.1
        if (opacity>1) {
            opacity=1
        }
    const rgb = baseColor.match(/\d+/g);
    cell.style.backgroundColor = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
        
        


    })
    container.appendChild(cell)

}
function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


    
}

createGrid()

