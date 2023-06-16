const boleto = "vip"
//let codigoDeAcceso

//if(boleto == "vip"){
//    codigoDeAcceso = "VIP-123-456"
//}else{
//    codigoDeAcceso = "REGULAR-987-543"
//}

const codigoDeAcceso = boleto === "vip" ? "VIP-123-456" : "REGULAR-765-342"

boleto === "vip" ? console.log("Tu Boleto es VIP") : console.log("Tu Boleto es REGULAR")
