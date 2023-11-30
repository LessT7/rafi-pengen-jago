const prompt = require('prompt-sync')()
const fs = require('fs')
const filePath = "data/json/dataMahasiswa.json"

if(!fs.existsSync('data')) {
    fs.mkdir('data', err => {
        if (err) throw err
    });
}
if(!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath,'[]', err => {
        if (err) throw err
    });
}


const storeData = JSON.parse(fs.readFileSync(filePath, "utf-8"))

const dataMahasiswa = []
const Mahasiswa = {
    username: prompt("Masukkan Nama : ")
}
dataMahasiswa.push(...storeData)
dataMahasiswa.push(Mahasiswa)


// todo - save

fs.writeFileSync(filePath, JSON.stringify(dataMahasiswa), err => {
    if (err) throw err
})