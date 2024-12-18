// Fungsi login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Contoh login sederhana (ganti dengan proses autentikasi sesungguhnya)
    if (username === 'ITperumda' && password === '00000') {
      // Simpan status login ke localStorage
      localStorage.setItem('userLoggedIn', 'true');
      
      // Redirect ke Beranda setelah login berhasil
      window.location.href = 'hukum.html'
    } else {
      // Tampilkan pesan kesalahan jika login gagal
      document.getElementById('error-message').style.display = 'block';
    }
  });
  
// Fungsi untuk logout
document.getElementById('logoutButton').addEventListener('click', function() {
  // Hapus status login di localStorage
  localStorage.removeItem('userLoggedIn');

  // Redirect ke halaman login (index.html) ketika logout diklik
  window.location.href = 'index.html';
});

// Pengecekan status login saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  const isLoggedIn = localStorage.getItem('userLoggedIn');

  if (!isLoggedIn) {
      // Jika tidak login, redirect ke halaman login
      window.location.href = 'index.html';
  }
});

// Pengecekan login status di halaman Beranda1.html
document.addEventListener('DOMContentLoaded', function() {
    // Cek status login dari localStorage
    const isLoggedIn = localStorage.getItem('userLoggedIn');
  
    if (!isLoggedIn) {
      // Jika tidak login, redirect ke halaman login (index.html)
      window.location.href = 'index.html';
    }
});

    // Ambil elemen input, tombol, dan container konten
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const contentContainer = document.getElementById("contentContainer");

    // Tambahkan event listener pada tombol pencarian
    searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value.toLowerCase(); // Ambil teks input
        const blogItems = contentContainer.querySelectorAll(".col-lg-6.col-xl-4"); // Ambil semua elemen aspek

        blogItems.forEach((item) => {
            const title = item.querySelector("a.h4").textContent.toLowerCase(); // Ambil teks judul
            if (title.includes(searchTerm)) {
                item.style.display = ""; // Tampilkan elemen jika cocok
            } else {
                item.style.display = "none"; // Sembunyikan elemen jika tidak cocok
            }
        });
    });
