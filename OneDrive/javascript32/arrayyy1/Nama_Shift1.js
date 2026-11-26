// Tugas Array - Nama Shift 1
let Nama_Shif1 = [
  "Diandra Kayla",
  "Dewi Afifatu Zuhro",
  "Della Agustina Widiyani",
  "Dini Febtia Murni",
  "Bunia Asyirotul Karimah",
  "Bunga Sasi Kirana",
  "Ashley Aurellia Nomi Putri",
  "Anisa Istikoma",
  "Alyani Rofiyah",
  "M Zainul Haqi",
  "Lucky Adi Irawan",
  "Ihzan Gunawan",
];

// Menampilkan semua nama satu per satu
console.log("=== DAFTAR NAMA SHIFT 1 ===");
for (let i = 0; i < Nama_Shif1.length; i++) {
  console.log((i + 1) + ". " + Nama_Shif1[i]);
}

// Menampilkan jumlah total
console.log("---------------------------");
console.log("Jumlah Shift 1: " + Nama_Shif1.length + " orang");

// Menampilkan nama pertama dan terakhir
console.log("Nama Pertama: " + Nama_Shif1[0]);
console.log("Nama Terakhir: " + Nama_Shif1[Nama_Shif1.length - 1]);