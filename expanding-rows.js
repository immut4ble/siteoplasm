var x = function(row) {
        var element = document.getElementsByClassName(row)[0];
        if (element.classList.contains("expanded")) {
                element.classList.add("contracted");
                element.classList.remove("expanded");
        } else {
                element.classList.add("expanded");
                element.classList.remove("contracted");
        }
}

document.getElementById("rants").onclick = function() { x("rants") };
document.getElementById("pages").onclick = function() { x("pages") };
document.getElementById("essays").onclick = function() { x("essays") };
document.getElementById("comics").onclick = function() { x("comics") };
document.getElementById("blogs").onclick = function() { x("blogs") };
document.getElementById("talks").onclick = function() { x("talks") };
document.getElementById("cheatsheets").onclick = function() { x("cheatsheets") };
