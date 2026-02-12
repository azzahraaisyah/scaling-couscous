// 1. Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

// 2. Binary Search
function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

// 3. Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Fungsi untuk menampilkan hasil di HTML
function jalankanDemo() {
    let data = [64, 34, 25, 12, 22, 11, 90];
    let output = document.getElementById('output');
    
    let hasil = "Data Awal: " + data.join(", ") + "\n";
    
    // Sortir dulu
    let sortedData = bubbleSort([...data]);
    hasil += "Setelah Bubble Sort: " + sortedData.join(", ") + "\n";
    
    // Cari data
    let target = 22;
    let index = binarySearch(sortedData, target);
    hasil += `Cari angka ${target} dengan Binary Search: Ditemukan di indeks ${index}`;
    
    output.innerText = hasil;
}
