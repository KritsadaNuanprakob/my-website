// 1. ฟังก์ชันแสดงเวลาแบบ Real-time
function updateClock() {
    const now = new Date();
    const options = { 
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', 
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false 
    };
    document.getElementById('clock').innerText = now.toLocaleDateString('en-GB', options);
}
setInterval(updateClock, 1000); // อัปเดตทุกๆ 1 วินาที
updateClock(); // เรียกใช้งานทันทีตอนโหลดหน้าเว็บ

// 2. ฟังก์ชันสลับธีม สว่าง/มืด (แบบปุ่มสวิตช์)
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

themeBtn.addEventListener('click', () => {
    // เพิ่ม/ลบ class 'light-mode' ที่แท็ก body
    // ส่วนเอฟเฟกต์การเลื่อนปุ่มและเปลี่ยนสี จะถูกจัดการด้วย CSS อัตโนมัติ
    body.classList.toggle('light-mode');
});