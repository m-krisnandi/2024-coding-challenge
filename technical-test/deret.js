let beda = 6;
let jumlah = 10; //Jumlah iterasi
let nilaiAwal = 2; // Nilai awal deret aritmatika

/*
            Rumus mencari barisan aritmatika adalah U[n] = U[1] + (n - 1) * beda
        */
let barisan;

console.log("Berikut adalah barisan aritmatika");

for (let i = 1; i <= 10; i++) {
  barisan = nilaiAwal + (i - 1) * beda;

  console.log(barisan);
}

/*
            Deret aritmatikanya, mencari jumlah n suku pertama
            dengan rumus S[n] = n/2 * (2 * a + (n-1) * beda)
        */
let n = 10;
let deret = (n / 2) * (2 * nilaiAwal + (n - 1) * beda);
console.log("Berikut adalah deret aritmatikanya");
console.log(`Jumlah ${n} suku pertamanya adalah ${deret}`);


let arr = ["scale", "happy", "strength",
    "peace", "happy", "happy"];

function removeDuplicates(arr) {
return arr.filter((item,
    index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(arr));