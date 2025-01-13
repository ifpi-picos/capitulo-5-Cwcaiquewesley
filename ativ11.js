let N1 = parseFloat(prompt("digite o numero"))
let N2 = parseFloat(prompt("digite o numero"))
let N3 = parseFloat(prompt("digite seu numero"))


if (N1>N2&&N1>N3){
    console.log("maior numero é:",N1)
}else if (N2>N1&&N2>N3) {
 console.log("Maior numero é:" ,N2)
}else{
    console.log("maior numero é:",N3)
}