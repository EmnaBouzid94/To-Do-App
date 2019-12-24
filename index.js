function addTask() {

    var div = document.createElement("div");
    var btncomp = document.createElement("button");
    var btndel = document.createElement("button");
    var tcomp = document.createTextNode("Complete");
    var tdel = document.createTextNode("Delete");
    var name = document.createElement("h3");
    var written = document.getElementsByClassName("taskname");
    var x = written[0].value
    var y = document.createTextNode(x)


    document.getElementById("third").appendChild(div);

    btncomp.appendChild(tcomp);
    div.appendChild(btncomp);


    btndel.appendChild(tdel);
    div.appendChild(btndel);

    name.appendChild(y);
    div.appendChild(name);

    div.style.display = "flex"
    div.style.height = "50px"
    div.style.alignItems = "center"

    btncomp.style.marginLeft = "100px"
    btncomp.style.backgroundColor = "teal"
    btncomp.style.borderRadius = "5px"
    btncomp.style.color = "white"
    btncomp.style.border = "0px"
    btncomp.style.width = "70px"
    btncomp.style.height = "30px"

    btndel.style.marginLeft = "20px"
    btndel.style.backgroundColor = "teal"
    btndel.style.borderRadius = "5px"
    btndel.style.color = "white"
    btndel.style.border = "0px"
    btndel.style.width = "70px"
    btndel.style.height = "30px"


    name.style.marginLeft = "40px"
    name.style.color = "teal"
    name.style.fontSize = "25px"




    btncomp.className = "completed"
    btndel.className = "deleted"
    name.className = "named"

    let tabd = document.getElementsByClassName("deleted")
    for (let i = 0; i < tabd.length; i++) {
        tabd[i].onclick = function() {
            let parent = this.parentElement
            parent.style.display = "none"
        }
    }

    let tabc = document.getElementsByClassName("completed")
    let tabn = document.getElementsByClassName("named")
    for (let i = 0; i < tabc.length; i++)
        tabc[i].onclick = function() {
            this.textContent = "Undo"
            tabn[i].style.textDecoration = "line-through"
        }


}



function supp() {


}


function complete() {

}