"use strickt";

const helloHeader = document.getElementById("helloHeader");
const helloParagraph = document.getElementsByTagName("helloParagraph");
helloHeader.style.color = 'red';
//console.log(helloParagraph);

const testParagraph = document.createElement("p");
testParagraph.innerHTML = `<span style="color: blue">Hello</span>`
document.body.appendChild(testParagraph);
console.log(testParagraph);

