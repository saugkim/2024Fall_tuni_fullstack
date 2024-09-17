
const rows = Array.from(document.getElementsByTagName('li'))
// console.log(rows.length)

rows.forEach( row => { 
    let sizeOfChild = Array.from(row.getElementsByTagName('li')).length;
    if (sizeOfChild > 0)
        row.firstChild.textContent = row.firstChild.textContent + "(" + sizeOfChild + ")" ;     
})