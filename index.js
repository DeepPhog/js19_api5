var tablec = document.getElementById("tablec")
var slife = document.getElementById("life")
var u = document.getElementById("u")
var x = Math.floor(Math.random() * 3);
var y = Math.floor(Math.random() * 3);
var game = true
var life = 3
var clicked
var gifts = [
    "Trehjulssykkel", "Elsykkel", "Tesla Model X"
]
//var end

start()
function start() {
    for (let i = 0; i < 3; i++) {
        var tr = document.createElement("tr")
        tablec.appendChild(tr)
        for (let j = 0; j < 3; j++) {
            var td = document.createElement("td")
            var img = document.createElement("img")

            img.setAttribute("id", "id" + i + j)

            addimg(img, "0")
            tr.appendChild(td)
            td.appendChild(img)
            click()
        }
    }
    u.innerText = life

    //CHEATS
    console.log("Row " + parseInt(x + 1));
    console.log("Cell " + parseInt(y + 1));
    //CHEATS

    var xnum = tablec.children[x]
    var ynum = xnum.children[y]
    var wincell = ynum.children[0]
    //Loose func 
    function click() {
        img.onclick = function () {
            if (game) {
                life--
                getid(this.id)
                if (life <= 0) {
                    u.innerText = ""
                    slife.innerText = "Sorry You Lost"
                    game = false
                }
                u.innerText = life
            }
        }
    }
    function getid(id) {

        clicked = document.getElementById(id)
        addimg(clicked, "2")
    }
    //win func
    wincell.onclick = function win() {
        if (game) {
            addimg(wincell, "1")
            slife.innerText = "Gratulerer du har vunnet en " + gifts[life - 1]
            game = false
        }
    }
}
function addimg(change, num) {
    fetch("bilder.json")
        .then(response => response.json())
        .then(data => {
            change.src = data[num].images
        });
}

