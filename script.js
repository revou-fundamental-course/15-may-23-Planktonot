document.addEventListener("DOMContentLoaded", function() {
    // Perhitungan luas persegi
    document.getElementById("luasForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Mendapatkan input sisi luas dari user
      var sisi = parseFloat(document.getElementById("sisi-luas").value);
  
      // Handle Error
      if (isNaN(sisi) || sisi <= 0) {
        alert("Invalid input for sisi");
        return;
      }
  
      // Menghitung luas persegi dengan rumus SxS
      var luas = sisi * sisi;
  
      // Menampilkan hasil perhitungan luas
      document.getElementById("output_luas").textContent = luas;
    });
  
    // Perhitungan input keliling
    document.getElementById("kelilingForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Mendapatkan input keliling
      var sisi = parseFloat(document.getElementById("sisi-keliling").value);
  
      // Input harus valid, kalau tidak akan ada peringatan
      if (isNaN(sisi) || sisi <= 0) {
        alert("Invalid input for sisi");
        return;
      }
  
      // Hitung keliling
      var keliling = 4 * sisi;
  
      // Menampilkan haisl dari perhitungan
      document.getElementById("output_keliling").textContent = keliling;
    });
  });
  