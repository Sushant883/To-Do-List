const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


//in this function we are adding the task to the list.
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");// create li tag
        li.innerHTML = inputBox.value;// compare the value of li(tag) and inputBox.value
        listContainer.appendChild(li);// display the li(tag)value in the output.

        let span = document.createElement("Span");// create span tag for (X) sign.
        span.innerHTML = "\u00d7"// create the X sign
        li.appendChild(span);// display the X sign
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);