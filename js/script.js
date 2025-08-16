welcomeSpeech();
/**
 * Asks for the user's name when they first visit the site,
 * then displays that name at the top of the page.
 * If the user doesn't enter a name, it will display "User".
 */
function welcomeSpeech() {
  let userName = prompt("Please enter your name:");
  if (userName != "") {
    document.getElementById("userName").textContent = " " + userName;
  }
}

/**
 * Takes the message written by the user in the form,
 * then displays it in a pop-up notification (alert).
 * This function does not change any data on the page, it only shows a notification.
 */
function sendMessage() {
  let message = document.getElementById("pesan").value;
  if (message != "") {
    alert("Message sent: " + message);
  } else {
    alert("Please enter a message before sending.");
  }
}

function submitForm() {
    updatePreview();
    sendMessage();
}

/**
 * Updates the display on the right side of the form in real-time
 * as the user types or selects data in the form.
 * This provides a preview of the entered data.
 */
function updatePreview() {
    // Get values from each input in the form
    const nama = document.getElementById('nama').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked');
    const pesan = document.getElementById('pesan').value;

    // Display these values in the preview area
    document.getElementById('previewNama').textContent = ' ' + nama;
    document.getElementById('previewLahir').textContent = ' ' + tanggalLahir;
    document.getElementById('previewKelamin').textContent = jenisKelamin ? ' ' + jenisKelamin.value : '';
    document.getElementById('previewPesan').textContent = ' ' + pesan;
}

/**
 * Runs the initial functions when the web page has finished loading.
 * This ensures that all page elements are ready before the script is executed.
 * This function will activate the scroll animation and the digital clock.
 */
document.addEventListener('DOMContentLoaded', (event) => {
    setupScrollAnimation();
    updateTime(); // Call the clock on initial load
    setInterval(updateTime, 1000); // Update the clock every second
});

/**
 * Displays a continuously running digital clock.
 * This clock will show the date, time (hours, minutes, seconds),
 * and timezone information (e.g., Asia/Jakarta GMT+7).
 */
function updateTime() {
    const now = new Date();
    
    // Format date to DD/MM/YYYY
    const date = now.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    // Format time to HH:MM:SS (24-hour)
    const time = now.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    
    // Get timezone and GMT offset information
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const gmtOffset = now.getTimezoneOffset();
    const gmtSign = gmtOffset > 0 ? '-' : '+';
    const gmtHours = String(Math.abs(Math.floor(gmtOffset / 60))).padStart(2, '0');
    
    // Display the full time on the page
    document.getElementById('currentTime').textContent = `${date} ${time} (${timezone} GMT${gmtSign}${gmtHours})`;
}

/**
 * Provides an animation effect when the user scrolls the page.
 * Each section will appear slowly from the bottom
 * when that section becomes visible on the screen.
 */
function setupScrollAnimation() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1 } // Animation runs when 10% of the section is visible
    );

    sections.forEach(section => observer.observe(section));
}

/**
 * Mengambil pesan yang ditulis pengguna di dalam form,
 * lalu menampilkannya dalam sebuah notifikasi pop-up (alert).
 * Fungsi ini tidak akan mengubah data di halaman, hanya menampilkan notifikasi.
 */
function sendMessage() {
  let message = document.getElementById("pesan").value;
  if (message != "") {
    alert("Message sent: " + message);
  } else {
    alert("Please enter a message before sending.");
  }
}

/**
 * Updates the display on the right side of the form in real-time
 * as the user types or selects data in the form.
 * This provides a preview of the entered data.
 */
function updatePreview() {
    // Get values from each input in the form
    const nama = document.getElementById('nama').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked');
    const pesan = document.getElementById('pesan').value;

    // Display these values in the preview area
    document.getElementById('previewNama').textContent = ' ' + nama;
    document.getElementById('previewLahir').textContent = ' ' + tanggalLahir;
    document.getElementById('previewKelamin').textContent = jenisKelamin ? ' ' + jenisKelamin.value : '';
    document.getElementById('previewPesan').textContent = ' ' + pesan;
}

/**
 * Runs the initial functions when the web page has finished loading.
 * This ensures that all page elements are ready before the script is executed.
 * This function will activate the scroll animation and the digital clock.
 */
document.addEventListener('DOMContentLoaded', (event) => {
    setupScrollAnimation();
    updateTime(); // Call the clock on initial load
    setInterval(updateTime, 1000); // Update the clock every second
});

/**
 * Displays a continuously running digital clock.
 * This clock will show the date, time (hours, minutes, seconds),
 * and timezone information (e.g., Asia/Jakarta GMT+7).
 */
function updateTime() {
    const now = new Date();
    
    // Format date to DD/MM/YYYY
    const date = now.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    // Format time to HH:MM:SS (24-hour)
    const time = now.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    
    // Get timezone and GMT offset information
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const gmtOffset = now.getTimezoneOffset();
    const gmtSign = gmtOffset > 0 ? '-' : '+';
    const gmtHours = String(Math.abs(Math.floor(gmtOffset / 60))).padStart(2, '0');
    
    // Display the full time on the page
    document.getElementById('currentTime').textContent = `${date} ${time} (${timezone} GMT${gmtSign}${gmtHours})`;
}

/**
 * Provides an animation effect when the user scrolls the page.
 * Each section will appear slowly from the bottom
 * when that section becomes visible on the screen.
 */
function setupScrollAnimation() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1 } // Animation runs when 10% of the section is visible
    );

    sections.forEach(section => observer.observe(section));
}