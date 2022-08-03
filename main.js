const books = [
    {
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        path: "images/don_quixote",
    },
    {
        title: "Lord of the Rings",
        author: "J.R.R. Tolkien",
        path: "images/lord_of_the_rings",
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        path: "images/harry_potter",
    },
    {
        title: "Alice's Adventures in Wonderland",
        author: "Lewis Carroll",
        path: "images/alice_adventures_in_wonderland",
    },
    {
        title: "Twenty Thousand Leagues Under the Sea",
        author: "Jules Verne",
        path: "images/twenty_thousand_leagues_under_the_sea",
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        path: "images/moby_dick",
    },
    {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        path: "images/the_picture_of_dorian_gray",
    },
];
var newBooks = JSON.parse(JSON.stringify(books, ["path", "title", "author"]));

const body = document.getElementsByTagName("body")[0];
const table = document.createElement("table");
const tHead = document.createElement("thead");
const tBody = document.createElement("tbody");

let rowHead = document.createElement("tr");
let headOne = document.createElement("th");
headOne.style = "border-right: 1px solid black;";
headOne.innerHTML = "";
let headTwo = document.createElement("th");
headTwo.style = "border-right: 1px solid black;";
headTwo.innerHTML = "Title";
let headThree = document.createElement("th");
headThree.innerHTML = "Author";

rowHead.appendChild(headOne);
rowHead.appendChild(headTwo);
rowHead.appendChild(headThree);
rowHead.style = "font-size: 18px; height: 30px";
tHead.appendChild(rowHead);
tHead.style = "background-color: beige; text-align: center;";

for (let key in newBooks) {
    const row = document.createElement("tr");
    console.log(newBooks[key]);
    for (let name in newBooks[key]) {
        const yacheika = document.createElement("td");
        yacheika.style = "text-align: left;  border: 1px solid black; padding:0 10px";
        if (name === "path") {
            const image = document.createElement("img");
            image.src = "./asset/" + newBooks[key][name] + ".jpeg";
            yacheika.appendChild(image);
            image.style = "width: 105px; height: 153px; padding: 10px";
            row.appendChild(yacheika);
        } else {
            const text = document.createTextNode(newBooks[key][name]);
            yacheika.appendChild(text);
            row.appendChild(yacheika);
        }
    }
    tBody.appendChild(row);
}
table.appendChild(tHead);
table.appendChild(tBody);
document.body.appendChild(table);
table.style = "border-collapse: collapse; margin: 0 auto; border: 3px solid black;";
