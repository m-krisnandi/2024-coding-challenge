function bubbleSortWithSwapLimit(arr, swapLimit) {
  const n = arr.length;

  // Lakukan pengurutan menggunakan Bubble Sort
  for (let i = 0; i < n - 1; i++) {
    // Untuk setiap iterasi, inisialisasi jumlah swap dalam iterasi tersebut
    let swapsInIteration = 0;

    // Lakukan iterasi untuk melakukan swap
    for (let j = 0; j < n - i - 1; j++) {
      // Jika elemen ke j lebih besar dari elemen setelahnya
      if (arr[j] > arr[j + 1]) {
        // Lakukan swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapsInIteration++;

        // Jika jumlah swap sudah mencapai batas, hentikan pengurutan
        if (swapsInIteration === swapLimit) {
          return arr;
        }
      }
    }
  }

  return arr;
}

// Contoh penggunaan
const arr = [3, 1, 5, 4, 2];
const swapLimit = 4;
const sortedArray = bubbleSortWithSwapLimit(arr, swapLimit);
console.log("Array yang diurutkan:", sortedArray);
