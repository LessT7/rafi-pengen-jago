const dataMahasiswa = []
let counter;
const getDataMahasiswa = () => {
    const Mahasiswa = {}

    // todo - array sebagai properti dari object mahasiswa
    const data = ['FullName', 'Id', 'Email', 'NoHP']
    // todo - sebagai perulangan jika nanti tidak diisi / null
    data.map(item => {
        do {
            // todo - menggunakan backslit 

            Mahasiswa[item] = prompt(`Masukkan ${item}`) 
        } while (Mahasiswa[item] === null || Mahasiswa[item] === "")
    })

    return Mahasiswa;
}

// todo - simpan ke local storage
const storeDataMahasiswa = localStorage.getItem('Data Mahasiswa')
if (storeDataMahasiswa) {
    const objStoreDataMahasiswa = JSON.parse(storeDataMahasiswa)
    dataMahasiswa.push(... objStoreDataMahasiswa)
}

// console.log(objStoreDataMahasiswa)

do {
    dataMahasiswa.push(getDataMahasiswa())
    counter = confirm("Masukkan data Lagi ? ")
} while (counter)


const strDataMahasiswa = JSON.stringify(dataMahasiswa)
localStorage.setItem('Data Mahasiswa',strDataMahasiswa)

console.log(dataMahasiswa)