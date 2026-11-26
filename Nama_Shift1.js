
let Nama_Shift1 = [
    "Ashley Aurellia Nomi Putri",
    "Anisa Istikoma",
    "Alyani Rofiyah",
    "Bunga Sasi Kirana",
    "Bunia Asyirotul Karimah",
    "Della Agustina Widiyani",
    "Diandra Kayla Aramita",
    "Dewi Afifatu Zuhro",
    "M. Zainul Haqi",
    "Ikhzan Gunawan",
    "Adi Irawan yang Beruntung",
];

// 1. Tampilkan index sesuai nama masing-masing
// 2. Array dimulai dari index 0
console.log("--- DAFTAR NAMA + INDEX ---");
for (let i = 0; i < Nama_Shift1.length; i++) {
    console.log(i + ". " + Nama_Shift1[i]);
}

// Menampilkan jumlah total
console.log("------------------------");
console.log("Jumlah Shift 1: " + Nama_Shift1.length + " orang");

// Menampilkan nama pertama dan terakhir
console.log("Nama Pertama: " + Nama_Shift1[0]);
console.log("Nama Terakhir: " + Nama_Shift1[Nama_Shift1.length - 1]);

// 3. Tampilkan data, jika index ke-3 lewati / jangan tampilkan
console.log("--- SKIP INDEX 3 ---");
for (let i = 0; i < Nama_Shift1.length; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i + ". " + Nama_Shift1[i]);
}
