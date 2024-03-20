
const btnGrid = document.querySelector('#btn');
btnGrid.addEventListener('click', makingGrid);



function makingGrid(){

    let toAdd = document.querySelector("#container");
    while (toAdd.firstChild) {
      toAdd.removeChild(toAdd.firstChild);
    }
    
    let row = prompt("input numbers of rows.");
    let column = prompt("input numbers of columns.");
    if(row > 100) {
        alert("please enter a number of rows smaller than 100");
        return;
    }
    if(column > 100) {
        alert("please enter a number of columns smaller than 100");
        return;
    }
for ( let i =0 ; i <= row ; i ++ ){

    let newRow = document.createElement('div');
    newRow.className = "row";
    toAdd.appendChild(newRow);
    for ( let j =0 ; j <= column ; j ++ ){

    let newColumn = document.createElement('div');
    newColumn.className = "column";
    newRow.appendChild(newColumn);
    newColumn.addEventListener('mouseover', () => {
    newColumn.style.backgroundColor = 'black';
    });
}
}};




