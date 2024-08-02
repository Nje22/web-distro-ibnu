// JavaScript untuk menangani pesanan
document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua tombol pesanan
  const orderButtons = document.querySelectorAll(".order-button");
  orderButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Ambil informasi produk
      const product = this.getAttribute("data-product");
      const price = this.getAttribute("data-price");

      // Tampilkan pesan konfirmasi
      alert(`Anda telah memesan: ${product} dengan harga Rp${price}.`);

      // Simpan pesanan ke Local Storage
      addOrderToLocalStorage(product, price);
    });
  });
});

// Fungsi untuk menambahkan pesanan ke Local Storage
function addOrderToLocalStorage(product, price) {
  // Ambil pesanan yang ada di Local Storage
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  // Tambahkan pesanan baru
  orders.push({ product, price });

  // Simpan kembali ke Local Storage
  localStorage.setItem("orders", JSON.stringify(orders));

  // Tampilkan daftar pesanan di konsol (opsional)
  console.log("Pesanan saat ini:", orders);
}

// Fungsi untuk mengambil semua pesanan dari Local Storage (opsional)
function getOrdersFromLocalStorage() {
  return JSON.parse(localStorage.getItem("orders")) || [];
}
function validateNumberLength(input) {
  if (input.value.length > 15) {
    input.value = input.value.slice(0, 15);
  }
}
