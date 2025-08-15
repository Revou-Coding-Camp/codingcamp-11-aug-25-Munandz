console.log("Script loaded successfully");

welcomeSpeech();

function welcomeSpeech() {
    let userName = prompt("Masukkan nama Anda:");
    if (userName != '') {
        document.getElementById('userName').textContent = userName;
    }
};