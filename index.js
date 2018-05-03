document.addEventListener("DOMContentLoaded", function() {
    let body = document.body;
    let headerText = document.createTextNode("This application was made only with vanilla JavaScript and CSS (no HTML). When you click the 'Add Square' button, new squares will appear on the page. When you mouse over the square, the id of that square will appear. When your mouse leaves the square, the id number will disapear. When you click on a square, it will change to a random color. When you double click a square, an alert will pop up telling you whether the id number is odd or even."); 
    let header = document.createElement("h2");
    let buttonText = document.createTextNode("Add Square");
    let button = document.createElement("button");

    header.appendChild(headerText);
    body.appendChild(header);
    button.appendChild(buttonText);
    body.appendChild(button);

    let counter = 0;

    button.addEventListener("click", function() {
        let div = document.createElement("div");

        div.className = "box";
        div.id = counter + 1;

        body.appendChild(div);

        if (counter < div.id) {
            counter += 1;
        }

        let pText = document.createTextNode(div.id);
        let p = document.createElement("p");
        

        div.addEventListener("mouseenter", function() {
            div.appendChild(p);
            p.className = "paragraph";
            p.appendChild(pText);
        });

        div.addEventListener("mouseleave", function() {
            div.removeChild(p);
        });

        div.addEventListener("click", function() {
            let colors = "#";
            let letters = ['FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C11B79', 'AA3939', '2D882D'];
            colors += letters[Math.floor(Math.random() * letters.length)];
            div.style.backgroundColor = colors;
        });

        div.addEventListener("dblclick", function() {
            if (div.id % 2 === 0) {
                alert("The id of this square is even.");
            } else {
                alert("The id of this square is odd.");
            }
        });
    });
});