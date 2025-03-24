const price = '5800';  // 設定價格條件
const seat = '特四區';   // 設定可點擊的座位區名稱


document.querySelectorAll('.seat-item').forEach(label => {  // ⚠️ 這裡應該放在外面！
    if (label.innerHTML.includes(seat)) {
        label.click()
    }
})