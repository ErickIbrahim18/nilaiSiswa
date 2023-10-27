function hasilNilai(nilai) {
  if (nilai < 60) {
    console.log(`Nilai Angka :` + nilai);
    console.log("Nilai Huruf :D");
  } else if (nilai <= 74) {
    console.log(`Nilai Angka :` + nilai);
    console.log("Nilai Huruf :C");
  } else if (nilai <= 84) {
    console.log(`Nilai Angka :` + nilai);
    console.log("Nilai Huruf :B");
  } else if (nilai <= 100) {
    console.log(`Nilai Angka : ` + nilai);
    console.log("Nilai Huruf :A");
  }
  if (nilai % 2 == 0) {
    console.log("Bilangan Genap");
  } else {
    console.log("Bilangan Ganjil");
  }
}

hasilNilai(61);
