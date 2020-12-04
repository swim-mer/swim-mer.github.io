function changeColor() {
    
    
    var currentColor = window.getComputedStyle(document.getElementById("name")).color;
    console.log(currentColor);

    if (currentColor == "rgb(124, 252, 124)") {
        document.getElementById("name").style.color = "rgb(217, 91, 67)";
    }

    else if (currentColor == "rgb(217, 91, 67)") {
        document.getElementById("name").style.color = "rgb(173, 216, 230)";
    }

    else if (currentColor == "rgb(173, 216, 230)") {
        document.getElementById("name").style.color = "rgb(124, 252, 124)";
    }
}