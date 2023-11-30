const readline = require("readline");
const chalk =require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Menu Pilihan : ")
console.log("1. Create Data Mahasiswa")
console.log("2. Edit Data Mahasiswa")
console.log("3. Delete Data Mahasiswa")
console.log("4. Pencarian Data Mahasiswa")
console.log("5. Pengururtan Data Mahasiswa")

rl.question("Masukkan pilihan Kamu : ", (pilihan) => {
  switch (parseInt(pilihan)) {
    //todo Create data Mahasiswa
    case 1:
      console.log(chalk.green("---Create data Mahasiswa---"));
      const {getDataMahasiswa} = require("./index3")
      const prompt = require('prompt-sync') ()

      let counter;

      do {
        getDataMahasiswa(["username","nim", "email", "noHp"])
        counter = prompt("Ingin mengulang ? (y/n)")
      } while (counter === 'y' || counter === 'Y')
      break;
    //todo Edit data Mahasiswa
    case 2:
      console.log(chalk.green("---Edit data Mahasiswa---"));
      break;
    //todo Delete data Mahasiswa
    case 3:
      console.log(chalk.green("---Delete data Mahasiswa---"));
      break;
    //todo Pencarian data Mahasiswa
    case 4:
      console.log(chalk.green("---Pencarian data Mahasiswa---"));
      break;
    //todo Pengurutan data Mahasiswa
    case 5:
      console.log(chalk.green("---Pengurutan data Mahasiswa---"));
      break;
    default:
      console.log(chalk.red("Pilihan kamu SALAH"));
  }

  rl.close();
});