const prompt = require('prompt-sync')()
const {getDataMahasiswa} = require("./module/index")

let counter;

do {
    getDataMahasiswa(["username","email","nim"])
    counter = prompt("Apakah Ingin Mengulang ? (yes/no)")

}while (counter === 'y' || counter === 'Y')