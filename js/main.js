function convert(){
    let val = document.getElementById("cmeter").value 

    document.getElementById("m").innerHTML = val / 100
    document.getElementById("cm").innerHTML = val
}