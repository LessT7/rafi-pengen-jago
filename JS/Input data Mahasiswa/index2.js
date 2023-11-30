const dataMahasiswa = []
let counter;
const getDataMahasiswa = () => {
    const Mahasiswa = {}
    // todo ARRAY SEBAGAI PROPERTI DARI OBJECT MAHASISWA
    const data = ['FullName', 'NIM', 'Email', 'NoHP']
    data.map(item => {
        do {
            Mahasiswa[item] = prompt(`Masukkan ${item}`)
        } while(Mahasiswa[item] === null || Mahasiswa[item] === "")
        })

    return Mahasiswa;
}

const storeDataMahasiswa = localStorage.getItem('Data Mahasiswa')
if (storeDataMahasiswa) {
    const objStoreDataMahasiswa = JSON.parse(storeDataMahasiswa)
    dataMahasiswa.push(...objStoreDataMahasiswa)
}

do {
    dataMahasiswa.push(getDataMahasiswa())
    counter = confirm("Ingin masukkan data lagi ?")
} while(counter)

const strDataMahasiswa = JSON.stringify(dataMahasiswa)
localStorage.setItem('Data Mahasiswa', strDataMahasiswa)

console.log(dataMahasiswa)