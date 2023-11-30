const prompt = require('prompt-sync')()
const fs = require('fs')
const filePath = "./data/json/dataMahasiswa.json"


const createDirectory = (filePath) => {
     if(!fs.existsSync('./data')) {
        fs.mkdir('./data', err => {
            if (err) throw err
        });
    }
    if(!fs.existsSync('./data/json')) {
        fs.mkdir('./data/json', err => {
            if (err) throw err
        });
    }
    if(!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath,'[]', err => {
            if (err) throw err
        });
    }
}

const storeDataMahasiswa = (filePath) => {
    if(fs.existsSync(filePath)) {
        return JSON.parse(fs.readFileSync(filePath, "utf-8"))
    }
}

const saveDataMahasiswa = (filePath, dataMahasiswa) => {
    if (!fs.existsSync(filePath)) {
        createDirectory(filePath)
    }
    fs.writeFileSync(filePath, JSON.stringify(dataMahasiswa), err => {
        if (err) throw err
    })
}

const getDataMahasiswa = (data) => {
    createDirectory(filePath)
    const storeData = storeDataMahasiswa (filePath)
    const Mahasiswa = {}
    data.forEach(dataItem => {
        let input;
        do {
            input = prompt(`Masukkan ${dataItem} Mahasiswa : `);

            // Validasi input tidak boleh kosong atau hanya spasi
            if (!input || input.trim() === "") {
                console.log(`Error: ${dataItem} tidak boleh kosong.`);
            } else {
                // Contoh validasi tambahan: nama hanya mengandung huruf
                if (dataItem === 'Nama' && !/^[A-Za-z\s]+$/.test(input)) {
                    console.log(`Error: ${dataItem} harus terdiri dari huruf saja.`);
                    input = null;
                } else {
                    Mahasiswa[dataItem] = input.trim();
                }
            }
        } while (!Mahasiswa[dataItem]);
    });

    // data.map(dataItem => {
    //     let input
    //     do {
    //         // todo - menggunakan backslit 

    //         input = prompt(`Masukkan ${dataItem} Mahasiswa : `); 
    //         Mahasiswa[dataItem] = input
    //     } while (input === null || input === "")
    // });
    
    storeData.push(Mahasiswa)
    saveDataMahasiswa(filePath, storeData);

    return {
        editMahasiswa: (index, newData) => {
            if (index >= 0 && index < storeData.length) {
                storeData[index] = { ...storeData[index], ...newData };
                saveDataMahasiswa(filePath, storeData);
                return true;
            }
            return false;
        },
        deleteMahasiswa: (index) => {
            if (index >= 0 && index < storeData.length) {
                storeData.splice(index, 1);
                saveDataMahasiswa(filePath, storeData);
                return true;
            }
            return false;
        },
        searchMahasiswa: (key, value) => {
            return storeData.filter(item => item[key] === value);
        },
        sortMahasiswa: (key) => {
            storeData.sort((a, b) => {
                if (a[key] < b[key]) return -1;
                if (a[key] > b[key]) return 1;
                return 0;
            });
            saveDataMahasiswa(filePath, storeData);
        },
        getStoredData: () => {
            return storeData;
        }
    };
};


module.exports = {
    getDataMahasiswa
}
