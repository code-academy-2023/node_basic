//assosiatiivinen array
const bookArray=[
    {name:"JavaScript", author:"Teppo Testi"},
    {name:"CSS", author:"Liisa Virtanen"},
    {name:"Node.js", author:"Matti Mainio"},
];

console.log(bookArray);
//map operaattorilla voidaan luoda uusi array edellisestä
//esim. html-listaan
const listArray=bookArray.map(row =>"<li>"+row.name+" "+row.author+"</li>");
//esim. html-taulukkoon
const tableArray=bookArray.map(row =>"<tr><td>"+row.name+"</td><td>"+row.author+"</td></tr>");
console.log(listArray);
console.log(tableArray);