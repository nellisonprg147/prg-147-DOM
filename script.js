window.onload = function () {
    "use strict";

    // declare variables
    var aas = document.getElementById("aas");
    var h2Elements = aas.getElementsByTagName("h2");
    var h2Node;

    for (var i = 0; i < h2Elements.length; i++) {
        h2Node = h2Elements[i];

        // event handler
        h2Node.onclick = function () {

            var h2 = this; // current h2Node
            if (h2.getAttribute("class") === "open") {
                // by using id attributes, determine which H2 is selected and
                // toggle the + - indicators
                if (h2.getAttribute("id") === "one") {
                    document.getElementById("i-one").innerHTML = "remove";
                } else if (h2.getAttribute("id") === "two") {
                    document.getElementById("i-two").innerHTML = "remove";
                } else if (h2.getAttribute("id") === "three") {
                    document.getElementById("i-three").innerHTML = "remove";
                } else if (h2.getAttribute("id") === "four") {
                    document.getElementById("i-four").innerHTML = "remove";
                } else if (h2.getAttribute("id") === "five") {
                    document.getElementById("i-five").innerHTML = "remove";
                } else if (h2.getAttribute("id") === "six") {
                    document.getElementById("i-six").innerHTML = "remove";
                }

                //changes to closed
                h2.setAttribute("class", "close");
            } else {
                //changes to open
                h2.setAttribute("class", "open");

                if (h2.getAttribute("id") === "one") {
                    document.getElementById("i-one").innerHTML = "add";
                } else if (h2.getAttribute("id") === "two") {
                    document.getElementById("i-two").innerHTML = "add";
                } else if (h2.getAttribute("id") === "three") {
                    document.getElementById("i-three").innerHTML = "add";
                } else if (h2.getAttribute("id") === "four") {
                    document.getElementById("i-four").innerHTML = "add";
                }else if (h2.getAttribute("id") === "five") {
                    document.getElementById("i-five").innerHTML = "add";
                } else if (h2.getAttribute("id") === "six") {
                    document.getElementById("i-six").innerHTML = "add";
                }
            }
            // changes the sibling node, directly following the h2
            if (h2.nextElementSibling.getAttribute("class") === "close") {
                h2.nextElementSibling.setAttribute("class", "open");
            } else {
                h2.nextElementSibling.setAttribute("class", "close")
            }


        }
    }
}