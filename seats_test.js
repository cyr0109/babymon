const price = '5800';  // 設定價格條件
const seats = ['特二區', '特一區', '特四區', '特三區', '橙2B-1', '黃2B-2', '黃2B-1', '橙2B-2']; 

let clicked = false;  // 設定一個變數來標記是否已經點擊過

seats.forEach(seat => {
    if (clicked) return;  // 如果已經點擊過，直接跳出該區域的處理邏輯
    document.querySelectorAll('.seat-item').forEach(label => {
        if (label.innerHTML.includes(seat)) {
            label.click();
            clicked = true;  // 標記為已點擊，避免繼續執行
            return;  // 退出內層迴圈
        }
    })
})