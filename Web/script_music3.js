let audio = new Audio(); // กำหนดตัวแปร audio ตั้งแต่แรก

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("playSong3").addEventListener("click", function () {
        startSong("songFile/song3.mp3");
    });

    document.getElementById("stopSong").addEventListener("click", function () {
        if (audio && !audio.paused) {
            console.log("หยุดเพลง:", audio.src);
            audio.pause();
            audio.currentTime = 0; // รีเซ็ตเพลงให้เริ่มต้นใหม่
        } else {
            console.log("ไม่มีเพลงที่กำลังเล่นอยู่");
        }
    });
});

// ฟังก์ชันเริ่มเล่นเพลง
function startSong(songFile) {
    if (!audio.paused) {
        audio.pause();
    }

    audio.src = songFile; // เปลี่ยนเพลงโดยไม่สร้าง Audio ใหม่
    audio.currentTime = 0; // รีเซ็ตเพลงทุกครั้งที่เปลี่ยน
    audio.play()
        .then(() => {
            alert("กำลังเล่นเพลง: เจ็บก็สิอดเอา - MANG bamm");
            console.log("กำลังเล่นเพลง:", songFile);
        })
        .catch(error => {
            console.error("เกิดข้อผิดพลาด:", error);
            alert("ไม่สามารถเล่นเพลงได้ กรุณาตรวจสอบว่าไฟล์เพลงมีอยู่จริง");
        });
}
