// Panggil fungsi welcomeSpeech saat halaman dimuat
document.addEventListener('DOMContentLoaded', (event) => {
    welcomeSpeech();
    setupScrollAnimation();
});

// Fungsi untuk menyapa pengguna
function welcomeSpeech() {
    let userName = prompt("Masukkan nama Anda:");
    if (userName && userName.trim() !== '') {
        document.getElementById('userName').textContent = userName;
    } else {
        document.getElementById('userName').textContent = 'Pengunjung';
    }
}

// Fungsi untuk mengirim pesan dari form
function sendMessage() {
    // Ambil nilai dari setiap input form
    const nama = document.getElementById('nama').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked');
    const pesan = document.getElementById('pesan').value;

    // Validasi input
    if (!nama || !tanggalLahir || !jenisKelamin || !pesan) {
        alert("Harap lengkapi semua kolom sebelum mengirim.");
        return;
    }

    // Tampilkan nilai di area preview
    document.getElementById('currentTime').textContent = new Date().toLocaleString('id-ID');
    document.getElementById('previewNama').textContent = nama;
    document.getElementById('previewLahir').textContent = tanggalLahir;
    document.getElementById('previewKelamin').textContent = jenisKelamin.value;
    document.getElementById('previewPesan').textContent = pesan;

    // Kosongkan form setelah submit
    document.getElementById('contactForm').reset();
}

// Fungsi untuk animasi saat scroll
function setupScrollAnimation() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Muncul saat 10% bagian terlihat
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}